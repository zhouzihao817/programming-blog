import { useParams, Link } from 'react-router-dom'
import { getAllTags, getArticlesByTag } from '../articles'

function Tags() {
  const { tag } = useParams<{ tag?: string }>()
  const allTags = getAllTags()

  if (tag) {
    const filtered = getArticlesByTag(tag)
    return (
      <div className="container">
        <a href="/" style={{ display: 'inline-block', marginBottom: '1rem', fontSize: '0.9rem' }}>← 返回首页</a>
        <h1 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>标签：{tag}</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
          共 {filtered.length} 篇文章
        </p>
        {filtered.map(article => (
          <article className="post-card" key={article.slug}>
            <h2><Link to={`/post/${article.slug}`}>{article.title}</Link></h2>
            <div className="post-meta">
              <span>{article.date}</span>
            </div>
            <div className="post-tags">
              {article.tags.map(t => (
                <Link to={`/tags/${t}`} className="tag" key={t}>{t}</Link>
              ))}
            </div>
          </article>
        ))}
        {filtered.length === 0 && <p style={{ color: 'var(--text-secondary)' }}>该标签下暂无文章。</p>}
      </div>
    )
  }

  return (
    <div className="container tags-page">
      <h1>标签分类</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem', marginTop: '1rem' }}>
        {allTags.map(t => {
          const count = getArticlesByTag(t).length
          return (
            <Link to={`/tags/${t}`} key={t}
              style={{
                background: 'var(--tag-bg)',
                color: 'var(--tag-text)',
                padding: '0.4rem 1rem',
                borderRadius: '6px',
                fontWeight: 500,
                fontSize: '0.9rem',
              }}>
              {t} ({count})
            </Link>
          )
        })}
      </div>

      {allTags.map(t => (
        <div className="tag-section" key={t}>
          <h2>{t}</h2>
          <ul>
            {getArticlesByTag(t).map(article => (
              <li key={article.slug}>
                <Link to={`/post/${article.slug}`}>{article.title}</Link>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginLeft: '0.5rem' }}>
                  {article.date}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Tags
