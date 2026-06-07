import { Link } from 'react-router-dom'
import { articles } from '../articles'

function Home() {
  return (
    <div className="container">
      <section style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>最新文章</h1>
        <p style={{ color: 'var(--text-secondary)' }}>分享编程知识、开发经验和学习心得</p>
      </section>

      {articles.map(article => (
        <article className="post-card" key={article.slug}>
          <h2>
            <Link to={`/post/${article.slug}`}>{article.title}</Link>
          </h2>
          <div className="post-meta">
            <span>{article.date}</span>
            <span>{article.description}</span>
          </div>
          <div className="post-tags">
            {article.tags.map(tag => (
              <Link to={`/tags/${tag}`} className="tag" key={tag}>
                {tag}
              </Link>
            ))}
          </div>
        </article>
      ))}
    </div>
  )
}

export default Home
