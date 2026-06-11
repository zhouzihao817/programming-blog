import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'
import '../auth/Login.css'

export default function Login() {
  const { login, register } = useAuth()
  const nav = useNavigate()
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!username.trim() || !password) { setMsg('❌ 请填写用户名和密码'); return }
    if (mode === 'login') {
      const ok = login(username.trim(), password)
      if (ok) { nav('/') } else { setMsg('❌ 用户名或密码错误') }
    } else {
      const ok = register(username.trim(), password)
      if (ok) { nav('/') } else { setMsg('❌ 用户名已存在') }
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>📝 编程博客</h1>
        <div className="mode-tabs">
          <button className={mode === 'login' ? 'active' : ''} onClick={() => { setMode('login'); setMsg('') }}>登录</button>
          <button className={mode === 'register' ? 'active' : ''} onClick={() => { setMode('register'); setMsg('') }}>注册</button>
        </div>

        <form onSubmit={handleSubmit}>
          <label>用户名
            <input value={username} onChange={e => setUsername(e.target.value)} placeholder="请输入用户名" autoFocus />
          </label>
          <label>密码
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="请输入密码" />
          </label>
          {msg && <p className="msg">{msg}</p>}
          <button type="submit" className="btn-submit">
            {mode === 'login' ? '🚀 登录' : '✨ 注册'}
          </button>
        </form>

        {mode === 'register' && (
          <p className="hint">💡 第一个注册的用户将成为管理员！</p>
        )}

        <Link to="/" className="back-link">← 返回首页</Link>
      </div>
    </div>
  )
}
