---
title: CSP 考级完全指南
date: 2026-06-13
tags: [CSP, 考级, 信息学奥赛, C++]
description: CSP-J/S（CCF非专业级软件能力认证）完全指南，包含考试介绍、知识点、备考方法和历年真题解析。
---

# CSP 考级完全指南

CSP（CCF非专业级软件能力认证）是由中国计算机学会（CCF）主办的全国性编程能力认证考试，是信息学奥赛的重要组成部分。

## 一、CSP 考试介绍

### 考试概况

- **主办方**：中国计算机学会（CCF）
- **考试语言**：C++、C、Pascal（逐步淘汰）
- **考试分组**：CSP-J（入门组）、CSP-S（提高组）
- **考试频率**：每年 1 次（9 月第一轮，10 月第二轮）
- **考试形式**：
  - 第一轮：笔试（选择题 + 填空题）
  - 第二轮：上机编程（4 道编程题）
- **通过标准**：第一轮约 20-30% 通过率，第二轮约 60-70% 通过率

### CSP-J vs CSP-S

| 项目 | CSP-J（入门组） | CSP-S（提高组） |
|------|------------------|------------------|
| 难度 | 普及级 | 提高级 |
| 适合人群 | 小学高年级、初中 | 初中、高中 |
| 知识点 | 基础算法、简单数据结构 | 高级算法、复杂数据结构 |
| 获奖难度 | 相对较低 | 较高 |
| 含金量 | 中等 | 很高 |

### 考试流程

```
9 月中旬：第一轮（笔试）
  ↓ 通过约 20-30%
10 月中旬：第二轮（上机）
  ↓ 通过约 60-70%
获得 CSP-J/S 认证证书
```

> **重要**：GESP 7 级 80 分以上可免 CSP-J 第一轮；GESP 8 级 80 分以上可免 CSP-S 第一轮！

## 二、CSP-J 知识点

### 1. 语法基础（必会）

- 变量、数据类型、运算符
- 分支结构（if-else、switch）
- 循环结构（for、while、do-while）
- 数组（一维、二维）
- 字符串基础
- 函数与递归

**示例题**：
```cpp
// 输入 n，输出 1+2+...+n 的和
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    cout << n * (n + 1) / 2 << endl;
    return 0;
}
```

### 2. 基础算法（重点）

**枚举**：
```cpp
// 百钱百鸡问题
for (int x = 0; x <= 20; x++) {
    for (int y = 0; y <= 33; y++) {
        int z = 100 - x - y;
        if (z % 3 == 0 && 5*x + 3*y + z/3 == 100) {
            cout << x << " " << y << " " << z << endl;
        }
    }
}
```

**模拟**：
```cpp
// 高精度加法
#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

string add(string a, string b) {
    reverse(a.begin(), a.end());
    reverse(b.begin(), b.end());
    
    string ans = "";
    int carry = 0;
    
    for (int i = 0; i < max(a.length(), b.length()); i++) {
        int x = i < a.length() ? a[i] - '0' : 0;
        int y = i < b.length() ? b[i] - '0' : 0;
        int sum = x + y + carry;
        ans += (sum % 10) + '0';
        carry = sum / 10;
    }
    
    if (carry) ans += '1';
    reverse(ans.begin(), ans.end());
    return ans;
}
```

**排序**：
- 冒泡排序、选择排序（必会）
- 快速排序、归并排序（了解思想）

```cpp
// 快速排序
void quickSort(int a[], int left, int right) {
    if (left >= right) return;
    
    int i = left, j = right;
    int pivot = a[left];
    
    while (i < j) {
        while (i < j && a[j] >= pivot) j--;
        a[i] = a[j];
        while (i < j && a[i] <= pivot) i++;
        a[j] = a[i];
    }
    
    a[i] = pivot;
    quickSort(a, left, i - 1);
    quickSort(a, i + 1, right);
}
```

### 3. 简单数据结构

- 栈（stack）：后进先出
- 队列（queue）：先进先出
- 链表（了解）

```cpp
// 栈的应用：括号匹配
#include <iostream>
#include <stack>
using namespace std;

bool isValid(string s) {
    stack<char> st;
    for (char c : s) {
        if (c == '(' || c == '[' || c == '{') {
            st.push(c);
        } else {
            if (st.empty()) return false;
            char top = st.top();
            st.pop();
            if ((c == ')' && top != '(') ||
                (c == ']' && top != '[') ||
                (c == '}' && top != '{')) {
                return false;
            }
        }
    }
    return st.empty();
}
```

### 4. 基础算法思想

**贪心算法**：
```cpp
// 活动选择问题
#include <algorithm>
using namespace std;

struct Activity {
    int s, e;
};

bool cmp(Activity a, Activity b) {
    return a.e < b.e;
}

int main() {
    // ...（代码见"算法进阶"文章）
}
```

**二分查找**：
```cpp
// 在有序数组中查找 x
int binarySearch(int a[], int n, int x) {
    int left = 0, right = n - 1;
    while (left <= right) {
        int mid = (left + right) / 2;
        if (a[mid] == x) return mid;
        else if (a[mid] < x) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
```

### 5. 基础数论

- 质数判断
- 最大公约数（GCD）
- 最小公倍数（LCM）

```cpp
// 欧几里得算法（辗转相除法）
int gcd(int a, int b) {
    if (b == 0) return a;
    return gcd(b, a % b);
}

// 最小公倍数
int lcm(int a, int b) {
    return a / gcd(a, b) * b;
}
```

## 三、CSP-S 知识点

### 1. 动态规划（DP）

**0-1 背包**：
```cpp
// 见"算法进阶"文章
```

**最长上升子序列（LIS）**：
```cpp
// 见"算法进阶"文章
```

**最长公共子序列（LCS）**：
```cpp
#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int main() {
    string a, b;
    cin >> a >> b;
    
    int n = a.length(), m = b.length();
    int dp[n + 1][m + 1];
    
    for (int i = 0; i <= n; i++) dp[i][0] = 0;
    for (int j = 0; j <= m; j++) dp[0][j] = 0;
    
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            if (a[i - 1] == b[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    
    cout << dp[n][m] << endl;
    return 0;
}
```

### 2. 搜索算法

**深度优先搜索（DFS）**：
```cpp
// 见"算法进阶"文章
```

**广度优先搜索（BFS）**：
```cpp
// 见"算法进阶"文章
```

**搜索剪枝**：
- 可行性剪枝
- 最优性剪枝
- 记忆化搜索

### 3. 图论

**最短路**：
- Dijkstra 算法（正权图）
- Floyd 算法（多源最短路）
- SPFA 算法（Bellman-Ford 队列优化）

```cpp
// Dijkstra 算法
#include <iostream>
#include <vector>
#include <queue>
using namespace std;

const int INF = 1e9;

void dijkstra(int s, vector<vector<pair<int, int>>> &graph, vector<int> &dist) {
    dist.assign(graph.size(), INF);
    dist[s] = 0;
    
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    pq.push({0, s});
    
    while (!pq.empty()) {
        int d = pq.top().first;
        int u = pq.top().second;
        pq.pop();
        
        if (d > dist[u]) continue;
        
        for (auto &edge : graph[u]) {
            int v = edge.first;
            int w = edge.second;
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                pq.push({dist[v], v});
            }
        }
    }
}
```

**最小生成树**：
- Prim 算法
- Kruskal 算法（并查集）

```cpp
// Kruskal 算法
#include <iostream>
#include <algorithm>
using namespace std;

struct Edge {
    int u, v, w;
};

bool cmp(Edge a, Edge b) {
    return a.w < b.w;
}

int parent[1000];

int find(int x) {
    if (parent[x] != x) {
        parent[x] = find(parent[x]);
    }
    return parent[x];
}

bool unite(int x, int y) {
    int px = find(x), py = find(y);
    if (px == py) return false;
    parent[px] = py;
    return true;
}

int main() {
    int n, m;
    cin >> n >> m;
    
    Edge edges[m];
    for (int i = 0; i < m; i++) {
        cin >> edges[i].u >> edges[i].v >> edges[i].w;
    }
    
    sort(edges, edges + m, cmp);
    
    for (int i = 1; i <= n; i++) {
        parent[i] = i;
    }
    
    int ans = 0;
    for (int i = 0; i < m; i++) {
        if (unite(edges[i].u, edges[i].v)) {
            ans += edges[i].w;
        }
    }
    
    cout << ans << endl;
    return 0;
}
```

### 4. 高级数据结构

- 并查集（Union-Find）
- 线段树（Segment Tree）
- 树状数组（Fenwick Tree）
- RMQ（区间最值查询）

### 5. 数学

- 组合数学（排列组合）
- 容斥原理
- 扩展欧几里得算法
- 快速幂

```cpp
// 快速幂
long long fastPow(long long a, long long b, long long mod) {
    long long ans = 1;
    while (b) {
        if (b & 1) ans = ans * a % mod;
        a = a * a % mod;
        b >>= 1;
    }
    return ans;
}
```

## 四、备考方法

### 1. 学习路径（CSP-J）

```
第 1-2 个月：语法基础
  - 掌握 C++ 基础语法
  - 刷题：洛谷入门题库

第 3-4 个月：基础算法
  - 枚举、模拟、排序
  - 简单数据结构（栈、队列）

第 5-6 个月：算法进阶
  - 贪心、二分、DFS/BFS
  - 基础数论

第 7-8 个月：真题训练
  - 刷近 5 年 CSP-J 真题
  - 参加模拟考试
```

### 2. 学习路径（CSP-S）

```
第 1 年：CSP-J 水平
  - 先通过 CSP-J

第 2 年：基础算法
  - 动态规划（背包、LIS、LCS）
  - 图论基础（最短路、最小生成树）

第 3 年：高级算法
  - 高级数据结构
  - 动态规划优化
  - 图论进阶

第 4 年：竞赛训练
  - 刷 NOIP 提高组真题
  - 参加省选、NOI 模拟赛
```

### 3. 推荐学习资源

**教材**：
- 《信息学奥赛一本通》（C++版）
- 《算法竞赛入门经典》（刘汝佳）
- 《算法竞赛进阶指南》（李煜东）

**在线评测**：
- **洛谷**：https://www.luogu.com.cn（最重要！）
- **OpenJudge**：http://openjudge.cn
- **Codeforces**：https://codeforces.com（国际平台）

**视频课程**：
- B站搜索"CSP 备考"
- 洛谷题库题解视频

### 4. 刷题策略

**CSP-J**：
- 每天刷 3-5 道题
- 重点：模拟、枚举、简单 DP
- 目标：刷完洛谷"普及-"和"普及"难度题目

**CSP-S**：
- 每天刷 1-2 道难题
- 重点：DP、图论、高级数据结构
- 目标：刷完洛谷"普及/提高-"到"省选/"难度题目

### 5. 考试技巧

**第一轮（笔试）**：
- 时间：2 小时
- 题型：选择题（15 道）、填空题（5 道）、阅读程序题（3 道）、完善程序题（2 道）
- 技巧：
  - 选择题：先排除明显错误选项
  - 阅读程序题：手动模拟程序运行
  - 时间分配：选择题 30 分钟，其余 90 分钟

**第二轮（上机）**：
- 时间：3.5 小时
- 题型：4 道编程题（100 分/道，共 400 分）
- 技巧：
  - 先读所有题目，从最简单的开始
  - 每题至少留 30 分钟调试
  - 文件操作（freopen）不要写错
  - 边界条件要多测试

**文件操作模板**：
```cpp
#include <iostream>
#include <fstream>
using namespace std;

int main() {
    // 考试时一定要用文件操作
    freopen("problem.in", "r", stdin);
    freopen("problem.out", "w", stdout);
    
    // 你的代码
    
    fclose(stdin);
    fclose(stdout);
    return 0;
}
```

## 五、历年真题解析

### CSP-J 2025 第二轮 第 1 题（节选）

**题目**：输入 n 个正整数，输出它们的和。

**解题思路**：签到题，直接求和。

**参考代码**：
```cpp
#include <iostream>
using namespace std;

int main() {
    freopen("sum.in", "r", stdin);
    freopen("sum.out", "w", stdout);
    
    int n;
    cin >> n;
    
    long long sum = 0;
    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;
        sum += x;
    }
    
    cout << sum << endl;
    
    return 0;
}
```

### CSP-S 2025 第二轮 第 2 题（节选）

**题目**：给定一棵 n 个节点的树，每个节点有一个权值，求树上任意两点路径上权值之和的最大值。

**解题思路**：树形 DP，类似树的直径。

**参考代码**（核心部分）：
```cpp
#include <iostream>
#include <vector>
using namespace std;

vector<vector<int>> tree;
vector<int> val;
int ans = 0;

int dfs(int u, int parent) {
    int max1 = 0, max2 = 0;  // 最长路径和次长路径
    
    for (int v : tree[u]) {
        if (v == parent) continue;
        
        int dist = dfs(v, u) + val[v];  // 从 v 到 u 的路径长度
        
        if (dist > max1) {
            max2 = max1;
            max1 = dist;
        } else if (dist > max2) {
            max2 = dist;
        }
    }
    
    ans = max(ans, max1 + max2);  // 更新答案
    return max1;  // 返回从 u 向下的最长路径
}
```

## 六、常见问题

### Q1：CSP-J/S 有什么用？

- **小升初**：科技特长生申请材料
- **中考**：部分地区有加分或自主招生政策
- **高考**：
  - 强基计划（985/211 高校）
  - 综合评价录取
  - 保送生资格（NOI 金牌）
- **出国**：证明算法和编程能力

### Q2：CSP-J 和 CSP-S 可以同时考吗？

可以，但建议：
- 初中及以下：先考 CSP-J，通过后再考 CSP-S
- 高中：直接考 CSP-S

### Q3：第一轮没通过怎么办？

- 分析薄弱知识点，针对性补强
- 多刷选择题和阅读程序题
- 明年再战（每年只有一次机会）

### Q4：第二轮没通过怎么办？

- 继续刷题，提高编程能力
- 参加模拟赛，熟悉考试环境
- 明年再战

## 七、练习题推荐

### CSP-J

**入门**：
- **洛谷 P5708-P5715**：语法基础题
- **洛谷 P1200-P1210**：普及-难度

**提高**：
- **洛谷 P1001-P1020**：普及/提高-难度
- **洛谷 P1500-P1520**：普及/提高-难度

**真题**：
- 近 5 年 CSP-J 第二轮真题（必刷！）

### CSP-S

**提高**：
- **洛谷 P1500-P1550**：普及/提高-到提高/省选-难度
- **洛谷 P2000-P2050**：提高/省选-难度

**进阶**：
- **洛谷 P3000-P3050**：省选/NOI-难度

**真题**：
- 近 5 年 CSP-S 第二轮真题（必刷！）
- 近 5 年 NOIP 提高组真题

## 八、学习规划建议

### 小学阶段

- **4-5 年级**：学习 C++ 语法，通过 CSP-J 第一轮
- **6 年级**：冲击 CSP-J 第二轮奖项

### 初中阶段

- **初一**：CSP-J 第二轮高分，开始准备 CSP-S
- **初二**：通过 CSP-S 第一轮，冲击 CSP-S 第二轮奖项
- **初三**：CSP-S 提高组一等奖，开始准备 NOIP 提高组

### 高中阶段

- **高一**：CSP-S 二等奖以上，冲击 NOIP 提高组一等奖
- **高二**：冲击 NOI 银牌/金牌，争取保送或强基计划
- **高三**：如果已有奖项，专注于高考；否则最后一次机会

## 九、总结

CSP 是信息学奥赛的重要里程碑，需要长期积累和系统训练。

**学习建议**：
1. 早起步，但不要太早（建议 4 年级开始）
2. 重基础，语法要扎实
3. 多刷题，理论结合实践
4. 参加比赛，积累经验
5. 保持兴趣，不要功利心太强

> **一句话**：CSP 不是终点，而是起点。坚持学习，你一定能走得更远！

希望这篇指南能帮助你顺利通过 CSP 考级！
