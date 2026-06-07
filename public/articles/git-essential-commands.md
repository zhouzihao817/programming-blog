---
title: Git 必备命令速查表
date: 2026-01-10
tags: [Git, 工具, 版本控制]
description: 汇总最常用的 Git 命令，助你高效进行版本控制与团队协作。
---

# Git 必备命令速查表

Git 是现代软件开发不可或缺的版本控制工具。掌握常用命令，能大幅提升开发效率。

## 基础配置

```bash
git config --global user.name "你的名字"
git config --global user.email "your@email.com"
git config --global core.editor "code"
```

## 日常工作流

```bash
# 查看状态
git status

# 添加文件到暂存区
git add .
git add src/

# 提交
git commit -m "feat: 添加新功能"

# 推送到远程
git push origin main
```

## 分支管理

```bash
# 创建并切换分支
git checkout -b feature/login

# 合并分支
git merge feature/login

# 删除分支
git branch -d feature/login
```

## 撤销操作

| 场景 | 命令 |
|------|------|
| 撤销工作区修改 | `git restore .` |
| 撤销暂存区 | `git restore --staged .` |
| 修改上次提交 | `git commit --amend` |
| 回退到某次提交 | `git reset --hard <commit>` |

> 记住：已经推送到远程的提交，谨慎使用 `git reset`！

熟练使用 Git 是每位开发者的基本功，建议结合实际操作多加练习。
