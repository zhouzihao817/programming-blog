export interface ArticleMeta {
  slug: string
  title: string
  date: string
  tags: string[]
  description: string
}

export const articles: ArticleMeta[] = [
  {
    slug: 'problem-bank-luogu-nowcoder',
    title: '大题库：洛谷+牛客题目导航',
    date: '2026-06-13',
    tags: ['题库', '洛谷', '牛客', '题目', '练习'],
    description: '汇总洛谷和牛客上的优质题目，按知识点分类，方便系统性刷题和查漏补缺。',
  },
  {
    slug: 'csp-guide',
    title: 'CSP 考级完全指南',
    date: '2026-06-13',
    tags: ['CSP', '考级', '信息学奥赛', 'C++'],
    description: 'CSP-J/S（CCF非专业级软件能力认证）完全指南，包含考试介绍、知识点、备考方法和历年真题解析。',
  },
  {
    slug: 'gesp-guide',
    title: 'GESP 考级完全指南',
    date: '2026-06-13',
    tags: ['GESP', '考级', '编程', 'C++'],
    description: 'GESP（青少年软件编程等级考试）完全指南，包含考试介绍、各级别知识点、备考方法和真题解析。',
  },
  {
    slug: 'algorithm-advanced-greedy-dp-dfs',
    title: '算法进阶：贪心、DP、DFS',
    date: '2026-06-13',
    tags: ['算法', '贪心', '动态规划', 'DFS', '搜索'],
    description: '深入讲解三种重要的算法思想：贪心算法、动态规划和深度优先搜索，掌握它们的解题思路。',
  },
  {
    slug: 'algorithm-basics-branch-loop',
    title: '算法基础：分支与循环',
    date: '2026-06-13',
    tags: ['算法', '基础', '分支', '循环', 'C++'],
    description: '掌握编程最基础的两个概念：分支结构和循环结构，这是所有算法的基石。',
  },
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
