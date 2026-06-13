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

// 内置文章（始终可用）
const builtinArticles: ArticleMeta[] = [
  { slug: 'sorting-algorithms', title: '排序算法详解', date: '2026-06-13', tags: ['算法', '排序', '快排', '归并', '堆排序'], summary: '深入讲解常用的排序算法：快速排序、归并排序、堆排序的原理、实现和时间复杂度分析。', status: 'approved', authorId: 'zhou', authorName: 'zhou' },
  { slug: 'search-algorithms', title: '查找算法详解', date: '2026-06-13', tags: ['算法', '查找', '二分', '哈希'], summary: '深入讲解常用的查找算法：顺序查找、二分查找、哈希查找的原理、实现和应用场景。', status: 'approved', authorId: 'zhou', authorName: 'zhou' },
  { slug: 'graph-theory-basics', title: '图论基础', date: '2026-06-13', tags: ['算法', '图论', 'DFS', 'BFS', '最短路'], summary: '图论是算法竞赛的核心内容，本文讲解图的基本概念、存储方式和基础算法。', status: 'approved', authorId: 'zhou', authorName: 'zhou' },
  { slug: 'problem-bank-luogu-nowcoder', title: '大题库：洛谷+牛客题目导航', date: '2026-06-13', tags: ['题库', '洛谷', '牛客', '题目', '练习'], summary: '汇总洛谷和牛客上的优质题目，按知识点分类，方便系统性刷题和查漏补缺。', status: 'approved', authorId: 'zhou', authorName: 'zhou' },
  { slug: 'csp-guide', title: 'CSP 考级完全指南', date: '2026-06-13', tags: ['CSP', '考级', '信息学奥赛', 'C++'], summary: 'CSP-J/S 完全指南，包含考试介绍、知识点、备考方法和历年真题解析。', status: 'approved', authorId: 'zhou', authorName: 'zhou' },
  { slug: 'gesp-guide', title: 'GESP 考级完全指南', date: '2026-06-13', tags: ['GESP', '考级', '编程', 'C++'], summary: 'GESP 青少年软件编程等级考试完全指南，包含考试介绍、各级别知识点、备考方法。', status: 'approved', authorId: 'zhou', authorName: 'zhou' },
  { slug: 'algorithm-advanced-greedy-dp-dfs', title: '算法进阶：贪心、DP、DFS', date: '2026-06-13', tags: ['算法', '贪心', '动态规划', 'DFS', '搜索'], summary: '深入讲解三种重要的算法思想：贪心算法、动态规划和深度优先搜索。', status: 'approved', authorId: 'zhou', authorName: 'zhou' },
  { slug: 'algorithm-basics-branch-loop', title: '算法基础：分支与循环', date: '2026-06-13', tags: ['算法', '基础', '分支', '循环', 'C++'], summary: '掌握编程最基础的两个概念：分支结构和循环结构，这是所有算法的基石。', status: 'approved', authorId: 'zhou', authorName: 'zhou' },
  { slug: 'getting-started-with-react', title: 'React 入门指南', date: '2024-01-15', tags: ['React', '前端'], summary: 'React 是一个用于构建用户界面的 JavaScript 库...', status: 'approved', authorId: 'system', authorName: '系统' },
  { slug: 'understanding-typescript', title: 'TypeScript 完全指南', date: '2024-02-20', tags: ['TypeScript', '前端'], summary: 'TypeScript 是 JavaScript 的超集...', status: 'approved', authorId: 'system', authorName: '系统' },
  { slug: 'git-essential-commands', title: 'Git 常用命令速查', date: '2024-03-10', tags: ['Git', '工具'], summary: 'Git 是目前最流行的版本控制系统...', status: 'approved', authorId: 'system', authorName: '系统' },
]

const initUsers = loadUsers()
if (initUsers.length === 0) {
  saveArticles(builtinArticles)
}

// 合并内置文章与用户创建的文章（确保内置文章始终存在）
function mergeArticles(stored: ArticleMeta[]): ArticleMeta[] {
  const storedSlugs = new Set(stored.map(a => a.slug))
  const missing = builtinArticles.filter(a => !storedSlugs.has(a.slug))
  return [...missing, ...stored]
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [users, setUsers] = useState<User[]>(loadUsers)
  const [articles, setArticles] = useState<ArticleMeta[]>(() => mergeArticles(loadArticles()))

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
