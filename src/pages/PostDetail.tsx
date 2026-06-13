import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useAuth } from '../auth/AuthContext'
import { ArticleMeta } from '../types'
import { getBuiltinContent } from '../articles/builtin-contents'

function PostDetail() {
  const { slug } = useParams<{ slug: string }>()
  const { articles } = useAuth()
  const [content, setContent] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  const article = articles.find((a: ArticleMeta) => a.slug === slug)

  useEffect(() => {
    if (!slug) return
    setLoading(true)

    // 优先使用内置文章内容（无需 fetch）
    const builtin = getBuiltinContent(slug)
    if (builtin) {
      setContent(builtin)
      setLoading(false)
      return
    }

    // 回退：尝试读取 .md 文件
    fetch(`/programming-blog/articles/${slug}.md`)
      .then(res => res.ok ? res.text() : Promise.reject('not found'))
      .then(text => { setContent(text); setLoading(false) })
      .catch(() => { setContent(null); setLoading(false) })
  }, [slug])

  if (loading) return <div className="container"><p>加载中...</p></div>
  if (!article) return <div className="container"><p>文章未找到。<Link to="/">返回首页</Link></p></div>

  return (
    <div className="container">
      <a href="/" style={{ display: 'inline-block', marginBottom: '1rem', fontSize: '0.9rem' }}>← 返回首页</a>
      <article className="post-detail">
        <h1>{article.title}</h1>
        <div className="post-meta">
          <span>{article.date}</span>
          <span> · </span>
          <span>作者：{article.authorName}</span>
          {article.status !== 'approved' && (
            <span style={{ color: '#f59e0b', marginLeft: '0.5rem' }}>
              （{article.status === 'pending' ? '待审核' : '已拒绝'}）
            </span>
          )}
        </div>
        <div className="post-tags" style={{ marginBottom: '1rem' }}>
          {article.tags.map((tag: string) => (
            <Link to={`/tags/${tag}`} className="tag" key={tag}>{tag}</Link>
          ))}
        </div>
        <div className="post-body">
          {content ? (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content.replace(/^---[\s\S]*?---\n*/, '')}
            </ReactMarkdown>
          ) : (
            <p style={{ color: 'var(--text-secondary)' }}>文章内容暂不可用（.md 文件未生成）。</p>
          )}
        </div>
      </article>
    </div>
  )
}

export default PostDetail
