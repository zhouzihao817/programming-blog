import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'

const Navbar = () => {
  const location = useLocation()
  const { user, isAdmin, logout } = useAuth()

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
          {user && <li><Link to="/new" className="nav-btn-new">✏️ 写文章</Link></li>}
          {isAdmin && <li><Link to="/admin" className="nav-btn-admin">⚙️ 管理</Link></li>}
          {user ? (
            <li className="nav-user">
              <span>👤 {user.username}</span>
              <button onClick={logout} className="nav-logout-btn">退出</button>
            </li>
          ) : (
            <li><Link to="/login" className="nav-btn-login">🔐 登录</Link></li>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
