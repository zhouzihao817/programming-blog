import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { articles, ArticleMeta } from '../articles'

interface ArticleData extends ArticleMeta {
  content: string
}

function PostDetail() {
  const { slug } = useParams<{ slug: string }>()
  const [article, setArticle] = useState<ArticleData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!slug) return
    fetch(`/articles/${slug}.md`)
      .then(res => res.text())
      .then(text => {
        const meta = articles.find(a => a.slug === slug)
        if (meta) {
          setArticle({ ...meta, content: text })
        }
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [slug])

  if (loading) return <div className="container"><p>加载中...</p></div>
  if (!article) return <div className="container"><p>文章未找到。</p></div>

  return (
    <div className="container">
      <a href="/" style={{ display: 'inline-block', marginBottom: '1rem', fontSize: '0.9rem' }}>← 返回首页</a>
      <article className="post-detail">
        <h1>{article.title}</h1>
        <div className="post-meta">
          <span>{article.date}</span>
        </div>
        <div className="post-tags" style={{ marginBottom: '1rem' }}>
          {article.tags.map(tag => (
            <Link to={`/tags/${tag}`} className="tag" key={tag}>{tag}</Link>
          ))}
        </div>
        <div className="post-body">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {article.content.replace(/^---[\s\S]*?---\n*/, '')}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  )
}

export default PostDetail
