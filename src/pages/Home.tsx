import { Link } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'
import { ArticleMeta } from '../types'

function Home() {
  const { user, isAdmin, articles } = useAuth()

  // 普通用户只能看已审核的，管理员可以看到所有
  const visible = isAdmin
    ? articles
    : articles.filter((a: ArticleMeta) => a.status === 'approved')

  return (
    <div className="container">
      <section style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>最新文章</h1>
        <p style={{ color: 'var(--text-secondary)' }}>分享编程知识、开发经验和学习心得</p>
        {!user && (
          <p style={{ marginTop: '0.8rem', fontSize: '0.9rem', color: 'var(--primary)' }}>
            💡 <Link to="/login">登录</Link> 后可以发布文章，第一个注册的用户将成为管理员！
          </p>
        )}
      </section>

      {visible.length === 0 && (
        <p style={{ color: 'var(--text-secondary)' }}>暂无文章，快去发布一篇吧！</p>
      )}

      {visible.map((article: ArticleMeta) => (
        <article className="post-card" key={article.slug}>
          <h2>
            <Link to={`/post/${article.slug}`}>{article.title}</Link>
            {article.status !== 'approved' && (
              <span style={{
                fontSize: '0.7rem', marginLeft: '0.5rem',
                padding: '0.1rem 0.4rem', borderRadius: '4px',
                background: article.status === 'pending' ? '#fef3c7' : '#fee2e2',
                color: article.status === 'pending' ? '#92400e' : '#991b1b',
              }}>
                {article.status === 'pending' ? '待审核' : '已拒绝'}
              </span>
            )}
          </h2>
          <div className="post-meta">
            <span>{article.date}</span>
            <span>{article.summary}</span>
          </div>
          <div className="post-tags">
            {article.tags.map((tag: string) => (
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
