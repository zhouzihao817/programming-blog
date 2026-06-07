import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          编程<span>博客</span>
        </Link>
        <ul className="navbar-links">
          <li><Link to="/" className={isActive('/') ? 'active' : ''}>首页</Link></li>
          <li><Link to="/tags" className={isActive('/tags') ? 'active' : ''}>标签</Link></li>
          <li><Link to="/about" className={isActive('/about') ? 'active' : ''}>关于</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
