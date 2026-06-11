import { createContext, useState, useCallback, useContext, ReactNode } from 'react'
import { User, UserRole, ArticleMeta, ArticleStatus } from '../types'

interface AuthContextType {
  user: User | null
  users: User[]
  articles: ArticleMeta[]
  login: (username: string, password: string) => boolean
  register: (username: string, password: string) => boolean
  logout: () => void
  isAdmin: boolean
  updateArticleStatus: (slug: string, status: ArticleStatus, note?: string) => void
  addArticle: (article: ArticleMeta) => void
}

const STORAGE_USERS = 'blog_users'
const STORAGE_ARTICLES = 'blog_articles'

function loadUsers(): User[] {
  try { return JSON.parse(localStorage.getItem(STORAGE_USERS) || '[]') } catch { return [] }
}
function saveUsers(users: User[]) { localStorage.setItem(STORAGE_USERS, JSON.stringify(users)) }
function loadArticles(): ArticleMeta[] {
  try { return JSON.parse(localStorage.getItem(STORAGE_ARTICLES) || '[]') } catch { return [] }
}
function saveArticles(articles: ArticleMeta[]) { localStorage.setItem(STORAGE_ARTICLES, JSON.stringify(articles)) }

export const AuthContext = createContext<AuthContextType>(null!)

const initUsers = loadUsers()
if (initUsers.length === 0) {
  // 初始化示例文章
  const sampleArticles: ArticleMeta[] = [
    { slug: 'getting-started-with-react', title: 'React 入门指南', date: '2024-01-15', tags: ['React', '前端'], summary: 'React 是一个用于构建用户界面的 JavaScript 库...', status: 'approved', authorId: 'system', authorName: '系统' },
    { slug: 'understanding-typescript', title: 'TypeScript 完全指南', date: '2024-02-20', tags: ['TypeScript', '前端'], summary: 'TypeScript 是 JavaScript 的超集...', status: 'approved', authorId: 'system', authorName: '系统' },
    { slug: 'git-essential-commands', title: 'Git 常用命令速查', date: '2024-03-10', tags: ['Git', '工具'], summary: 'Git 是目前最流行的版本控制系统...', status: 'approved', authorId: 'system', authorName: '系统' },
  ]
  saveArticles(sampleArticles)
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [users, setUsers] = useState<User[]>(loadUsers)
  const [articles, setArticles] = useState<ArticleMeta[]>(loadArticles)

  const isAdmin = user?.role === 'admin'

  // 登录
  const login = useCallback((username: string, password: string): boolean => {
    const found = users.find(u => u.username === username && u.password === password)
    if (found) { setUser(found); return true }
    return false
  }, [users])

  // 注册（第一个注册的用户为管理员）
  const register = useCallback((username: string, password: string): boolean => {
    if (users.find(u => u.username === username)) return false
    const role: UserRole = users.length === 0 ? 'admin' : 'user'
    const newUser: User = {
      id: Date.now().toString(),
      username, password, role,
      createdAt: new Date().toISOString().split('T')[0],
    }
    const updated = [...users, newUser]
    setUsers(updated)
    saveUsers(updated)
    setUser(newUser)
    return true
  }, [users])

  const logout = useCallback(() => setUser(null), [])

  // 更新文章状态（审核）
  const updateArticleStatus = useCallback((slug: string, status: ArticleStatus, note?: string) => {
    setArticles(prev => {
      const updated = prev.map(a =>
        a.slug === slug ? {
          ...a,
          status,
          reviewedBy: user?.username,
          reviewedAt: new Date().toISOString(),
          reviewNote: note || '',
        } : a
      )
      saveArticles(updated)
      return updated
    })
  }, [user])

  // 添加文章
  const addArticle = useCallback((article: ArticleMeta) => {
    setArticles(prev => {
      const updated = [...prev, article]
      saveArticles(updated)
      return updated
    })
  }, [])

  return (
    <AuthContext.Provider value={{ user, users, articles, login, register, logout, isAdmin, updateArticleStatus, addArticle }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)!
}
