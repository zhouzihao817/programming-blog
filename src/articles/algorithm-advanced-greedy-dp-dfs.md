---
title: 算法进阶：贪心、DP、DFS
date: 2026-06-13
tags: [算法, 贪心, 动态规划, DFS, 搜索]
description: 深入讲解三种重要的算法思想：贪心算法、动态规划和深度优先搜索，掌握它们的解题思路。
---

# 算法进阶：贪心、DP、DFS

这篇文章介绍三种核心算法思想，它们是解决复杂问题的利器。

## 一、贪心算法

贪心算法的核心是：**每一步都做出当前看起来最优的选择**，希望最终得到全局最优解。

### 适用条件

贪心算法只有当问题具有**贪心选择性质**和**最优子结构**时才有效。

### 经典例题

#### 例题 1：活动选择问题

有 n 个活动，每个活动有开始时间 s[i] 和结束时间 e[i]，同一时间只能参加一个活动，问最多能参加多少个活动？

**贪心策略**：按结束时间从小到大排序，每次选择结束时间最早且与已选活动不冲突的活动。

```cpp
#include <iostream>
#include <algorithm>
using namespace std;

struct Activity {
    int s, e;
};

bool cmp(Activity a, Activity b) {
    return a.e < b.e;  // 按结束时间排序
}

int main() {
    int n;
    cin >> n;
    Activity a[n];
    for (int i = 0; i < n; i++) {
        cin >> a[i].s >> a[i].e;
    }
    
    sort(a, a + n, cmp);
    
    int count = 1;  // 选第一个活动
    int lastEnd = a[0].e;
    
    for (int i = 1; i < n; i++) {
        if (a[i].s >= lastEnd) {  // 不冲突
            count++;
            lastEnd = a[i].e;
        }
    }
    
    cout << count << endl;
    return 0;
}
```

#### 例题 2：贪心背包问题

有 n 个物品，每个物品有重量 w[i] 和价值 v[i]，背包容量为 C，问最多能装多少价值？

**贪心策略**：按价值密度（v[i]/w[i]）从大到小排序，优先装价值密度高的物品。

> **注意**：分数背包（可以装一部分）可以用贪心，但 0-1 背包（必须整件装）不能用贪心，需要用动态规划！

### 常见贪心问题

- **区间调度**：选择最多的不重叠区间
- **哈夫曼编码**：构造最优前缀码
- **最小生成树**：Prim 和 Kruskal 算法
- **最短路径**：Dijkstra 算法

## 二、动态规划（DP）

动态规划的核心思想：**把大问题分解成小问题，记录小问题的答案，避免重复计算**。

### 动态规划三要素

1. **状态定义**：dp[i] 或 dp[i][j] 表示什么？
2. **状态转移方程**：如何从小问题推导出大问题？
3. **初始条件**：最简单的子问题是什么？

### 经典例题

#### 例题 1：斐波那契数列

**暴力递归**（低效）：
```cpp
int fib(int n) {
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);  // 重复计算太多
}
```

**动态规划**（高效）：
```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    vector<long long> dp(n+1);
    dp[1] = dp[2] = 1;
    
    for (int i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    
    cout << dp[n] << endl;
    return 0;
}
```

#### 例题 2：0-1 背包问题

有 n 个物品，每个物品有重量 w[i] 和价值 v[i]，背包容量为 C，每个物品只能选一次，问最大价值是多少？

**状态定义**：dp[i][j] 表示前 i 个物品，背包容量为 j 时的最大价值

**状态转移方程**：
```
dp[i][j] = max(dp[i-1][j], dp[i-1][j-w[i]] + v[i])
             ↑ 不选第i个物品      ↑ 选第i个物品
```

**代码实现**：
```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n, C;
    cin >> n >> C;
    
    vector<int> w(n+1), v(n+1);
    for (int i = 1; i <= n; i++) {
        cin >> w[i] >> v[i];
    }
    
    vector<vector<int>> dp(n+1, vector<int>(C+1, 0));
    
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= C; j++) {
            dp[i][j] = dp[i-1][j];  // 不选第i个物品
            if (j >= w[i]) {
                dp[i][j] = max(dp[i][j], dp[i-1][j-w[i]] + v[i]);
            }
        }
    }
    
    cout << dp[n][C] << endl;
    return 0;
}
```

**空间优化**（滚动数组）：
```cpp
vector<int> dp(C+1, 0);
for (int i = 1; i <= n; i++) {
    for (int j = C; j >= w[i]; j--) {  // 逆序！
        dp[j] = max(dp[j], dp[j-w[i]] + v[i]);
    }
}
```

#### 例题 3：最长上升子序列（LIS）

给定一个序列，求最长的严格上升子序列的长度。

**状态定义**：dp[i] 表示以第 i 个元素结尾的最长上升子序列长度

**状态转移方程**：
```
dp[i] = max(dp[j]) + 1, 其中 j < i 且 a[j] < a[i]
```

**代码实现**：
```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int n;
    cin >> n;
    
    vector<int> a(n), dp(n, 1);
    
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }
    
    int ans = 1;
    for (int i = 1; i < n; i++) {
        for (int j = 0; j < i; j++) {
            if (a[j] < a[i]) {
                dp[i] = max(dp[i], dp[j] + 1);
            }
        }
        ans = max(ans, dp[i]);
    }
    
    cout << ans << endl;
    return 0;
}
```

**O(n log n) 优化**（耐心排序）：
```cpp
vector<int> d;  // d[i] 表示长度为i+1的LIS的最小结尾元素
d.push_back(a[0]);

for (int i = 1; i < n; i++) {
    if (a[i] > d.back()) {
        d.push_back(a[i]);
    } else {
        *lower_bound(d.begin(), d.end(), a[i]) = a[i];
    }
}

cout << d.size() << endl;
```

### 常见 DP 问题

- **线性 DP**：最长上升子序列、最长公共子序列
- **背包 DP**：0-1 背包、完全背包、多重背包
- **区间 DP**：矩阵链乘法、石子合并
- **树形 DP**：树上最大独立集
- **状压 DP**：旅行商问题（TSP）

## 三、深度优先搜索（DFS）

DFS 是一种**穷举**算法，它会沿着一条路径走到头，然后回溯尝试其他路径。

### 基本模板

```cpp
#include <iostream>
using namespace std;

int n;
int vis[100];  // 访问标记

void dfs(int step) {
    // 1. 判断边界（递归终止条件）
    if (step == n + 1) {
        // 输出结果或更新答案
        return;
    }
    
    // 2. 尝试每一种可能
    for (int i = 1; i <= n; i++) {
        if (!vis[i]) {  // 如果没有访问过
            vis[i] = 1;  // 标记访问
            
            // 3. 继续下一步
            dfs(step + 1);
            
            // 4. 回溯（撤销标记）
            vis[i] = 0;
        }
    }
}

int main() {
    cin >> n;
    dfs(1);
    return 0;
}
```

### 经典例题

#### 例题 1：全排列问题

输出 1~n 的所有全排列。

```cpp
#include <iostream>
using namespace std;

int n;
int a[100], vis[100];

void dfs(int step) {
    if (step == n + 1) {
        for (int i = 1; i <= n; i++) {
            cout << a[i] << " ";
        }
        cout << endl;
        return;
    }
    
    for (int i = 1; i <= n; i++) {
        if (!vis[i]) {
            a[step] = i;
            vis[i] = 1;
            dfs(step + 1);
            vis[i] = 0;
        }
    }
}

int main() {
    cin >> n;
    dfs(1);
    return 0;
}
```

#### 例题 2：迷宫问题

给定一个迷宫，求从起点到终点的最短路径。

```cpp
#include <iostream>
#include <queue>
using namespace std;

int n, m;
int maze[100][100];
int dist[100][100];
int dx[4] = {0, 0, 1, -1};
int dy[4] = {1, -1, 0, 0};

struct Point {
    int x, y;
};

int bfs(int sx, int sy, int ex, int ey) {
    queue<Point> q;
    q.push({sx, sy});
    dist[sx][sy] = 0;
    
    while (!q.empty()) {
        Point p = q.front();
        q.pop();
        
        if (p.x == ex && p.y == ey) {
            return dist[p.x][p.y];
        }
        
        for (int i = 0; i < 4; i++) {
            int nx = p.x + dx[i];
            int ny = p.y + dy[i];
            
            if (nx >= 1 && nx <= n && ny >= 1 && ny <= m 
                && maze[nx][ny] == 0 && dist[nx][ny] == -1) {
                dist[nx][ny] = dist[p.x][p.y] + 1;
                q.push({nx, ny});
            }
        }
    }
    
    return -1;  // 无法到达
}

int main() {
    cin >> n >> m;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            cin >> maze[i][j];
            dist[i][j] = -1;
        }
    }
    
    int sx, sy, ex, ey;
    cin >> sx >> sy >> ex >> ey;
    
    int ans = bfs(sx, sy, ex, ey);
    cout << ans << endl;
    
    return 0;
}
```

> **注意**：最短路径问题通常用 BFS（广度优先搜索）而不是 DFS！

### DFS vs BFS

| 特点 | DFS | BFS |
|------|-----|-----|
| 数据结构 | 栈（递归） | 队列 |
| 空间复杂度 | O(深度) | O(宽度) |
| 适用场景 | 所有解、路径数 | 最短路径 |
| 剪枝 | 容易 | 困难 |

## 四、练习题推荐

### 贪心

- **洛谷 P1208 [USACO1.3] Mixing Milk**：贪心入门
- **洛谷 P1223 排队接水**：按时间排序
- **洛谷 P1803 凌乱的yyy / 线段覆盖**：活动选择问题

### 动态规划

- **洛谷 P1048 [NOIP2005] 采药**：0-1 背包入门
- **洛谷 P1616 疯狂的采药**：完全背包
- **洛谷 P1020 [NOIP1999] 导弹拦截**：LIS 经典题
- **洛谷 P1880 [NOI1995] 石子合并**：区间 DP

### DFS/BFS

- **洛谷 P1706 全排列问题**：DFS 模板题
- **洛谷 P1219 [USACO1.5] 八皇后**：DFS + 回溯
- **洛谷 P1443 马的遍历**：BFS 模板题
- **洛谷 P1135 奇怪的电梯**：BFS 最短路

## 五、学习建议

1. **贪心**：先证明贪心正确性，再写代码
2. **DP**：多刷题，总结状态定义和转移方程的模式
3. **搜索**：先画递归搜索树，再写代码，注意剪枝优化

> **一句话总结**：贪心看得近，DP 看得全，搜索看得深！

希望这篇文章能帮助你掌握这三种重要的算法思想！
