---
title: React 入门指南
date: 2026-03-15
tags: [React, JavaScript, 前端]
description: 从零开始学习 React，掌握组件化开发和现代前端开发模式。
---

# React 入门指南

React 是一个用于构建用户界面的 JavaScript 库，由 Facebook 开发并维护。它采用组件化的开发模式，让前端开发变得更加模块化和可维护。

## 为什么选择 React？

- **组件化开发**：将 UI 拆分成独立的可复用组件
- **虚拟 DOM**：高效的 DOM 更新机制
- **单向数据流**：让数据流向更可预测
- **丰富的生态**：庞大的社区和第三方库支持

## 快速开始

首先，使用 Vite 创建一个 React 项目：

```bash
npm create vite@latest my-react-app -- --template react-ts
cd my-react-app
npm install
npm run dev
```

## 第一个组件

```tsx
function Hello() {
  return <h1>你好，React！</h1>
}

export default Hello
```

## 状态管理

使用 `useState` 管理组件状态：

```tsx
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <button onClick={() => setCount(count + 1)}>
      点击了 {count} 次
    </button>
  )
}
```

> React 的哲学是：用组件构建界面，让数据驱动渲染。

希望这篇入门指南能帮助你快速上手 React 开发！
