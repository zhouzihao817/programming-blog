export interface ArticleMeta {
  slug: string
  title: string
  date: string
  tags: string[]
  description: string
}

export const articles: ArticleMeta[] = [
  {
    slug: 'getting-started-with-react',
    title: 'React 入门指南',
    date: '2026-03-15',
    tags: ['React', 'JavaScript', '前端'],
    description: '从零开始学习 React，掌握组件化开发和现代前端开发模式。',
  },
  {
    slug: 'understanding-typescript',
    title: 'TypeScript 类型系统详解',
    date: '2026-02-20',
    tags: ['TypeScript', 'JavaScript', '类型系统'],
    description: '深入理解 TypeScript 的类型系统，掌握类型安全和高级类型技巧。',
  },
  {
    slug: 'git-essential-commands',
    title: 'Git 必备命令速查表',
    date: '2026-01-10',
    tags: ['Git', '工具', '版本控制'],
    description: '汇总最常用的 Git 命令，助你高效进行版本控制与团队协作。',
  },
]

// 按日期降序排序
articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

export const getAllTags = (): string[] => {
  const tagSet = new Set<string>()
  articles.forEach(a => a.tags.forEach(t => tagSet.add(t)))
  return Array.from(tagSet).sort()
}

export const getArticlesByTag = (tag: string): ArticleMeta[] => {
  return articles.filter(a => a.tags.includes(tag))
}
