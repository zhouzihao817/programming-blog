---
title: TypeScript 类型系统详解
date: 2026-02-20
tags: [TypeScript, JavaScript, 类型系统]
description: 深入理解 TypeScript 的类型系统，掌握类型安全和高级类型技巧。
---

# TypeScript 类型系统详解

TypeScript 是 JavaScript 的超集，为其添加了静态类型检查。强大的类型系统是 TypeScript 最核心的价值所在。

## 基础类型

```typescript
let name: string = '张三'
let age: number = 25
let isStudent: boolean = false
let hobbies: string[] = ['编程', '阅读']
```

## 接口与类型别名

```typescript
interface User {
  id: number
  name: string
  email?: string  // 可选属性
}

type ID = number | string
```

## 泛型

泛型让类型更加灵活和可复用：

```typescript
function identity<T>(arg: T): T {
  return arg
}

const result = identity<string>("hello")
```

## 实用技巧

1. **利用类型推导** — 让 TypeScript 自动推断类型
2. **严格模式** — 在 `tsconfig.json` 中启用 `strict: true`
3. **类型守卫** — 使用 `typeof`、`instanceof` 缩小类型范围

> 好的类型设计能让 Bug 在编译阶段就被发现，而不是在生产环境崩溃。

TypeScript 的学习曲线可能稍陡，但投入的时间会在项目维护阶段得到丰厚回报。
