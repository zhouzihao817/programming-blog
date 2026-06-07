function About() {
  return (
    <div className="container">
      <a href="/" style={{ display: 'inline-block', marginBottom: '1rem', fontSize: '0.9rem' }}>← 返回首页</a>
      <div className="about-page">
        <h1>关于这个博客</h1>
        <p>
          欢迎来到我的编程博客！这里是我分享编程知识、开发经验和学习心得的地方。
        </p>
        <p>
          博客基于 <strong>React + TypeScript + Vite</strong> 构建，支持 Markdown 渲染，
          文章涵盖前端开发、后端技术、工具使用等编程相关主题。
        </p>
        <h2 style={{ fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>技术栈</h2>
        <ul>
          <li><strong>框架</strong>：React 18</li>
          <li><strong>语言</strong>：TypeScript</li>
          <li><strong>构建工具</strong>：Vite</li>
          <li><strong>路由</strong>：React Router</li>
          <li><strong>Markdown 渲染</strong>：react-markdown + remark-gfm</li>
          <li><strong>部署</strong>：GitHub Pages</li>
        </ul>
        <h2 style={{ fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>联系方式</h2>
        <p>
          如果你对博客内容有任何疑问或建议，欢迎通过以下方式联系我：
        </p>
        <ul>
          <li>GitHub：<a href="https://github.com" target="_blank" rel="noreferrer">@yourusername</a></li>
          <li>邮箱：your@email.com</li>
        </ul>
        <p style={{ marginTop: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          © 2026 编程博客 — 用代码改变世界 🚀
        </p>
      </div>
    </div>
  )
}

export default About
