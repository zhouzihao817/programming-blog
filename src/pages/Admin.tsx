import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'
import { ArticleStatus, ArticleMeta } from '../types'

export default function Admin() {
  const { user, isAdmin, articles, updateArticleStatus, logout } = useAuth()
  const [filter, setFilter] = useState<ArticleStatus | 'all'>('pending')
  const [note, setNote] = useState('')
  const [activeSlug, setActiveSlug] = useState<string | null>(null)

  if (!user) return <p style={{padding:'2rem'}}>请先<a href="/login">登录</a>。</p>
  if (!isAdmin) return <p style={{padding:'2rem'}}>⚠️ 仅管理员可访问。<Link to="/">返回首页</Link></p>

  const filtered = filter === 'all' ? articles : articles.filter((a: ArticleMeta) => a.status === filter)
  const counts = {
    all: articles.length,
    pending: articles.filter((a: ArticleMeta) => a.status === 'pending').length,
    approved: articles.filter((a: ArticleMeta) => a.status === 'approved').length,
    rejected: articles.filter((a: ArticleMeta) => a.status === 'rejected').length,
  }

  const handleReview = (slug: string, status: ArticleStatus) => {
    updateArticleStatus(slug, status, note)
    setActiveSlug(null)
    setNote('')
  }

  const statusLabel: Record<ArticleStatus, string> = { pending: '⏳ 待审核', approved: '✅ 已通过', rejected: '❌ 已拒绝' }
  const statusColor: Record<ArticleStatus, string> = { pending: '#f59e0b', approved: '#10b981', rejected: '#ef4444' }

  return (
    <div>
      {/* 顶部栏 */}
      <header style={{background:'#1f2937',padding:'0.75rem 1.5rem',display:'flex',alignItems:'center',justifyContent:'space-between',color:'#fff'}}>
        <h1 style={{fontSize:'1.1rem',fontWeight:600}}>⚙️ 管理员后台</h1>
        <div style={{display:'flex',gap:'1rem',alignItems:'center'}}>
          <span style={{fontSize:'0.85rem',color:'#9ca3af'}}>👤 {user.username}（管理员）</span>
          <button onClick={logout} style={{background:'#ef4444',color:'#fff',border:'none',padding:'0.35rem 0.8rem',borderRadius:'6px',cursor:'pointer',fontSize:'0.85rem'}}>退出</button>
        </div>
      </header>

      <div style={{display:'flex',minHeight:'calc(100vh - 52px)'}}>
        {/* 侧边栏 */}
        <aside style={{width:'220px',background:'#f9fafb',borderRight:'1px solid #e5e7eb',padding:'1rem'}}>
          {(['all','pending','approved','rejected'] as const).map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{
              display:'block',width:'100%',textAlign:'left',padding:'0.6rem 0.8rem',
              background: filter===f ? '#6366f1' : 'transparent', color: filter===f ? '#fff' : '#374151',
              border: 'none', borderRadius:'8px', cursor:'pointer', marginBottom:'0.3rem', fontSize:'0.9rem'
            }}>
              {f==='all'?'📋 全部':statusLabel[f as ArticleStatus]}（{counts[f]}）
            </button>
          ))}
          <Link to="/" style={{display:'block',marginTop:'1rem',fontSize:'0.85rem',color:'#6366f1'}}>← 返回博客</Link>
        </aside>

        {/* 主内容区 */}
        <main style={{flex:1,padding:'1.5rem',overflowY:'auto'}}>
          {filtered.length === 0 ? (
            <p style={{color:'#9ca3af',fontSize:'0.95rem'}}>暂无文章</p>
          ) : (
            <div style={{display:'grid',gap:'1rem'}}>
              {filtered.map((article: ArticleMeta) => (
                <div key={article.slug} style={{background:'#fff',border:'1px solid #e5e7eb',borderRadius:'10px',padding:'1.2rem'}}>
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
                    <div>
                      <h3 style={{margin:'0 0 0.3rem',fontSize:'1.05rem'}}>{article.title}</h3>
                      <p style={{margin:'0 0 0.3rem',fontSize:'0.8rem',color:'#9ca3af'}}>
                        作者：{article.authorName} | 日期：{article.date}
                      </p>
                      <span style={{fontSize:'0.75rem',padding:'0.15rem 0.5rem',borderRadius:'999px',color:'#fff',background: statusColor[article.status]}}>
                        {statusLabel[article.status]}
                      </span>
                    </div>
                  </div>

                  {article.status === 'pending' && (
                    <div style={{marginTop:'0.8rem',display:'flex',gap:'0.5rem',alignItems:'center',flexWrap:'wrap'}}>
                      <button onClick={() => handleReview(article.slug, 'approved')}
                        style={{background:'#10b981',color:'#fff',border:'none',padding:'0.35rem 0.8rem',borderRadius:'6px',cursor:'pointer',fontSize:'0.85rem'}}>
                        ✅ 通过
                      </button>
                      <button onClick={() => setActiveSlug(activeSlug === article.slug ? null : article.slug)}
                        style={{background:'#ef4444',color:'#fff',border:'none',padding:'0.35rem 0.8rem',borderRadius:'6px',cursor:'pointer',fontSize:'0.85rem'}}>
                        ❌ 拒绝
                      </button>
                      {activeSlug === article.slug && (
                        <>
                          <input value={note} onChange={e => setNote(e.target.value)} placeholder="拒绝原因（可选）"
                            style={{padding:'0.35rem 0.6rem',border:'1px solid #d1d5db',borderRadius:'6px',fontSize:'0.85rem',flex:'1'}} />
                          <button onClick={() => handleReview(article.slug, 'rejected')}
                            style={{background:'#dc2626',color:'#fff',border:'none',padding:'0.35rem 0.8rem',borderRadius:'6px',cursor:'pointer'}}>
                            确认拒绝
                          </button>
                        </>
                      )}
                    </div>
                  )}

                  {article.status !== 'pending' && (
                    <p style={{margin:'0.5rem 0 0',fontSize:'0.8rem',color:'#9ca3af'}}>
                      审核人：{article.reviewedBy} | 时间：{article.reviewedAt?.split('T')[0]}
                      {article.reviewNote && <> | 备注：{article.reviewNote}</>}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
