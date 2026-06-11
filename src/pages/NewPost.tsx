import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'
import ReactMarkdown from 'react-markdown'

const API = 'http://127.0.0.1:8765'

function NewPost() {
  const { user, addArticle } = useAuth()
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [tags, setTags] = useState('')
  const [summary, setSummary] = useState('')
  const [content, setContent] = useState('')
  const [publishing, setPublishing] = useState(false)
  const [msg, setMsg] = useState('')

  if (!user) return <p style={{padding:'2rem'}}>请先<a href="/login">登录</a>。</p>

  const date = new Date().toISOString().slice(0, 10)
  const slug = title.toLowerCase().replace(/[^a-z0-9\u4e00-\u9fa5]+/g, '-').replace(/^-|-$/g, '')

  const publish = async () => {
    if (!title || !content) { setMsg('❌ 请填写标题和内容'); return }
    if (!slug) { setMsg('❌ 标题无法生成有效文件名，请更换标题'); return }
    setPublishing(true)
    setMsg('')

    try {
      // 1. 写入 .md 文件（可选，失败不影响发布）
      try {
        const mdPath = `C:\\Users\\Administrator\\WorkBuddy\\2026-06-07-18-54-05\\programming-blog\\public\\articles\\${slug}.md`
        await fetch(`${API}/api/file/write`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ path: mdPath, content }),
        })
      } catch { /* 后端未启动，跳过 */ }

      // 2. 添加文章到 localStorage（待审核状态）
      const tagArr = tags.split(/,|，/).map(t => t.trim()).filter(Boolean)
      addArticle({
        slug,
        title,
        date,
        tags: tagArr,
        summary,
        status: 'pending',
        authorId: user.id,
        authorName: user.username,
      })

      setMsg('✅ 发布成功！文章已进入审核队列，审核通过后会自动展示。')
      setTimeout(() => navigate('/'), 1800)
    } catch (e: unknown) {
      const m = e instanceof Error ? e.message : String(e)
      setMsg('❌ ' + m)
    } finally {
      setPublishing(false)
    }
  }

  return (
    <div className="container" style={{ maxWidth: 900, margin: '0 auto', padding: '1rem' }}>
      <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>📝 发布新文章</h1>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
        👤 发布者：{user.username} | 📌 文章发布后需管理员审核通过才会展示
      </p>

      {msg && (
        <div style={{
          padding: '0.75rem 1rem', borderRadius: 6, marginBottom: '1rem',
          background: msg.startsWith('✅') ? '#dcfce7' : '#fee2e2',
          color: msg.startsWith('✅') ? '#166534' : '#991b1b',
        }}>{msg}</div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
        <div>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: 4 }}>标题 *</label>
          <input value={title} onChange={e => setTitle(e.target.value)} placeholder="文章标题"
            style={{ width: '100%', padding: '0.5rem', borderRadius: 6, border: '1px solid #d1d5db', boxSizing: 'border-box' }} />
        </div>
        <div>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: 4 }}>日期</label>
          <input value={date} disabled
            style={{ width: '100%', padding: '0.5rem', borderRadius: 6, border: '1px solid #d1d5db', background: '#f3f4f6', boxSizing: 'border-box' }} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
        <div>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: 4 }}>标签（逗号分隔）</label>
          <input value={tags} onChange={e => setTags(e.target.value)} placeholder="React, TypeScript, 前端"
            style={{ width: '100%', padding: '0.5rem', borderRadius: 6, border: '1px solid #d1d5db', boxSizing: 'border-box' }} />
        </div>
        <div>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: 4 }}>简介</label>
          <input value={summary} onChange={e => setSummary(e.target.value)} placeholder="文章简短描述"
            style={{ width: '100%', padding: '0.5rem', borderRadius: 6, border: '1px solid #d1d5db', boxSizing: 'border-box' }} />
        </div>
      </div>

      {/* 编辑区 + 预览区 */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', minHeight: 400 }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: 4 }}>内容（Markdown）*</label>
          <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="写点什么..."
            style={{ flex: 1, padding: '0.75rem', borderRadius: 6, border: '1px solid #d1d5db', fontFamily: 'monospace', fontSize: 14, resize: 'none' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: 4 }}>预览</label>
          <div className="markdown-body" style={{
            flex: 1, padding: '0.75rem', borderRadius: 6, border: '1px solid #d1d5db', overflow: 'auto', background: '#fafafa'
          }}>
            {content ? <ReactMarkdown>{content}</ReactMarkdown> : <span style={{ color: '#9ca3af' }}>预览将在此显示...</span>}
          </div>
        </div>
      </div>

      <div style={{ marginTop: '1rem', display: 'flex', gap: '0.75rem' }}>
        <button onClick={publish} disabled={publishing}
          style={{
            padding: '0.6rem 1.5rem', borderRadius: 6, border: 'none',
            background: publishing ? '#9ca3af' : '#2563eb', color: '#fff', cursor: publishing ? 'not-allowed' : 'pointer', fontWeight: 600
          }}>
          {publishing ? '发布中...' : '🚀 发布文章'}
        </button>
        <button onClick={() => navigate('/')}
          style={{ padding: '0.6rem 1.5rem', borderRadius: 6, border: '1px solid #d1d5db', background: '#fff', cursor: 'pointer' }}>
          取消
        </button>
      </div>

      {slug && (
        <div style={{ marginTop: '0.75rem', fontSize: 13, color: '#6b7280' }}>
          文件将保存为：<code style={{ background: '#f3f4f6', padding: '0.15rem 0.4rem', borderRadius: 4 }}>{slug}.md</code>
        </div>
      )}
    </div>
  )
}

export default NewPost
