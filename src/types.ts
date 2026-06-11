// 用户角色
export type UserRole = 'admin' | 'user'

// 用户
export interface User {
  id: string
  username: string
  password: string // 实际项目中应加密存储
  role: UserRole
  createdAt: string
}

// 文章状态
export type ArticleStatus = 'pending' | 'approved' | 'rejected'

// 扩展文章元信息（含状态）
export interface ArticleMeta {
  slug: string
  title: string
  date: string
  tags: string[]
  summary: string
  status: ArticleStatus
  authorId: string
  authorName: string
  reviewedBy?: string
  reviewedAt?: string
  reviewNote?: string
}
