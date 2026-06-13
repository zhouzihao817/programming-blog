---
title: 图论基础
date: 2026-06-13
tags: [算法, 图论, DFS, BFS, 最短路]
description: 图论是算法竞赛的核心内容，本文讲解图的基本概念、存储方式和基础算法。
---

# 图论基础

图论是算法竞赛的核心内容，几乎所有大型竞赛题目都会涉及图论知识。

## 一、图的基本概念

### 1. 图的定义

图 G = (V, E)，其中：
- V：顶点（Vertex）集合
- E：边（Edge）集合

### 2. 图的分类

| 类型 | 说明 | 示例 |
|------|------|----------|
| 无向图 | 边没有方向 | 朋友圈关系 |
| 有向图 | 边有方向 | 网页链接 |
| 加权图 | 边有权值 | 地图路径 |
| 无权图 | 边没有权值 | 社交网络 |

### 3. 图的术语

- **度**：与顶点相连的边数
- **路径**：从一个顶点到另一个顶点的顶点序列
- **环**：起点和终点相同的路径
- **连通图**：任意两个顶点之间都有路径
- **树**：连通且无环的无向图

## 二、图的存储

### 1. 邻接矩阵

使用一个二维数组存储边。

```cpp
#include <iostream>
using namespace std;

const int MAXN = 100;
int graph[MAXN][MAXN];

int main() {
    int n, m;
    cin >> n >> m;  // n 个顶点，m 条边
    
    // 初始化
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n; j++) {
            graph[i][j] = 0;  // 0 表示没有边
        }
    }
    
    // 读入边
    for (int i = 0; i < m; i++) {
        int u, v;
        cin >> u >> v;
        graph[u][v] = 1;  // 有向边
        graph[v][u] = 1;  // 无向图需要两边都要设置
    }
    
    return 0;
}
```

**优点**：直观，判断两点是否相邻 O(1)
**缺点**：空间复杂度 O(n²)，稀疏图浪费空间

### 2. 邻接表

使用链表或向量数组存储边。

```cpp
#include <iostream>
#include <vector>
using namespace std;

const int MAXN = 100;
vector<int> graph[MAXN];

int main() {
    int n, m;
    cin >> n >> m;
    
    // 读入边
    for (int i = 0; i < m; i++) {
        int u, v;
        cin >> u >> v;
        graph[u].push_back(v);  // 有向边
        graph[v].push_back(u);  // 无向图需要添加反向边
    }
    
    // 遍历顶点 u 的所有邻居
    int u = 1;
    for (int v : graph[u]) {
        cout << v << " ";
    }
    cout << endl;
    
    return 0;
}
```

**优点**：空间复杂度 O(n + m)，适合稀疏图
**缺点**：判断两点是否相邻 O(degree(u))

### 3. 链式前向星（竞赛常用）

```cpp
#include <iostream>
using namespace std;

const int MAXN = 100;
const int MAXM = 1000;

struct Edge {
    int to, next, w;
} edges[MAXM];

int head[MAXN], cnt;

void addEdge(int u, int v, int w) {
    edges[++cnt].to = v;
    edges[cnt].w = w;
    edges[cnt].next = head[u];
    head[u] = cnt;
}

int main() {
    int n, m;
    cin >> n >> m;
    
    // 初始化
    for (int i = 1; i <= n; i++) {
        head[i] = -1;
    }
    cnt = 0;
    
    // 读入边
    for (int i = 0; i < m; i++) {
        int u, v, w;
        cin >> u >> v >> w;
        addEdge(u, v, w);  // 有向边
        addEdge(v, u, w);  // 无向图需要添加反向边
    }
    
    // 遍历顶点 u 的所有出边
    int u = 1;
    for (int i = head[u]; i != -1; i = edges[i].next) {
        cout << "to: " << edges[i].to << ", weight: " << edges[i].w << endl;
    }
    
    return 0;
}
```

## 三、深度优先搜索（DFS）

### 算法思想

从一个顶点出发，沿着一条路径走到头，然后回溯，继续探索其他路径。

### 实现代码

```cpp
#include <iostream>
#include <vector>
using namespace std;

const int MAXN = 100;
vector<int> graph[MAXN];
bool visited[MAXN];

void dfs(int u) {
    visited[u] = true;
    cout << u << " ";
    
    for (int v : graph[u]) {
        if (!visited[v]) {
            dfs(v);
        }
    }
}

int main() {
    int n, m;
    cin >> n >> m;
    
    for (int i = 0; i < m; i++) {
        int u, v;
        cin >> u >> v;
        graph[u].push_back(v);
        graph[v].push_back(u);
    }
    
    // 从顶点 1 开始 DFS
    dfs(1);
    cout << endl;
    
    return 0;
}
```

### 应用

1. **连通性判断**
2. **割点/割边**
3. **强连通分量**
4. **拓扑排序**

## 四、广度优先搜索（BFS）

### 算法思想

从一个顶点出发，先访问所有距离为 1 的顶点，再访问距离为 2 的顶点，依此类推。

### 实现代码

```cpp
#include <iostream>
#include <vector>
#include <queue>
using namespace std;

const int MAXN = 100;
vector<int> graph[MAXN];
bool visited[MAXN];

void bfs(int start) {
    queue<int> q;
    q.push(start);
    visited[start] = true;
    
    while (!q.empty()) {
        int u = q.front();
        q.pop();
        cout << u << " ";
        
        for (int v : graph[u]) {
            if (!visited[v]) {
                visited[v] = true;
                q.push(v);
            }
        }
    }
}

int main() {
    int n, m;
    cin >> n >> m;
    
    for (int i = 0; i < m; i++) {
        int u, v;
        cin >> u >> v;
        graph[u].push_back(v);
        graph[v].push_back(u);
    }
    
    // 从顶点 1 开始 BFS
    bfs(1);
    cout << endl;
    
    return 0;
}
```

### 应用

1. **最短路径（无权图）**
2. **连通块计数**
3. **分层遍历**

## 五、最短路算法

### 1. Dijkstra 算法

**适用场景**：非负权值图

**算法思想**：每次选择距离起点最近的未访问顶点，更新其邻居的距离。

**时间复杂度**：
- 朴素版：O(n²)
- 堆优化版：O(m log n)

**堆优化版实现**：

```cpp
#include <iostream>
#include <vector>
#include <queue>
using namespace std;

const int MAXN = 1000;
const int INF = 1e9;

struct Edge {
    int to, w;
};

vector<Edge> graph[MAXN];
int dist[MAXN];
bool visited[MAXN];

void dijkstra(int start, int n) {
    // 初始化
    for (int i = 1; i <= n; i++) {
        dist[i] = INF;
        visited[i] = false;
    }
    dist[start] = 0;
    
    // 使用优先队列（小顶堆）
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    pq.push({0, start});
    
    while (!pq.empty()) {
        int u = pq.top().second;
        pq.pop();
        
        if (visited[u]) continue;
        visited[u] = true;
        
        for (Edge e : graph[u]) {
            int v = e.to, w = e.w;
            if (dist[v] > dist[u] + w) {
                dist[v] = dist[u] + w;
                pq.push({dist[v], v});
            }
        }
    }
}

int main() {
    int n, m;
    cin >> n >> m;
    
    for (int i = 0; i < m; i++) {
        int u, v, w;
        cin >> u >> v >> w;
        graph[u].push_back({v, w});
    }
    
    dijkstra(1, n);
    
    // 输出从顶点 1 到所有顶点的最短距离
    for (int i = 1; i <= n; i++) {
        if (dist[i] == INF) {
            cout << "INF ";
        } else {
            cout << dist[i] << " ";
        }
    }
    cout << endl;
    
    return 0;
}
```

### 2. Bellman-Ford 算法

**适用场景**：可以有负权值边，可以检测负环

**时间复杂度**：O(nm)

```cpp
#include <iostream>
#include <vector>
#include <climits>
using namespace std;

const int MAXN = 100;
const int INF = INT_MAX / 2;

struct Edge {
    int u, v, w;
};

vector<Edge> edges;
int dist[MAXN];

bool bellmanFord(int start, int n) {
    // 初始化
    for (int i = 1; i <= n; i++) {
        dist[i] = INF;
    }
    dist[start] = 0;
    
    // 松弛 n-1 次
    for (int i = 1; i < n; i++) {
        bool updated = false;
        for (Edge e : edges) {
            if (dist[e.u] != INF && dist[e.v] > dist[e.u] + e.w) {
                dist[e.v] = dist[e.u] + e.w;
                updated = true;
            }
        }
        if (!updated) break;  // 提前退出
    }
    
    // 检测负环
    for (Edge e : edges) {
        if (dist[e.u] != INF && dist[e.v] > dist[e.u] + e.w) {
            return false;  // 存在负环
        }
    }
    
    return true;  // 不存在负环
}

int main() {
    int n, m;
    cin >> n >> m;
    
    for (int i = 0; i < m; i++) {
        int u, v, w;
        cin >> u >> v >> w;
        edges.push_back({u, v, w});
    }
    
    if (bellmanFord(1, n)) {
        for (int i = 1; i <= n; i++) {
            cout << dist[i] << " ";
        }
        cout << endl;
    } else {
        cout << "存在负环" << endl;
    }
    
    return 0;
}
```

### 3. Floyd-Warshall 算法

**适用场景**：求所有点对之间的最短路径

**时间复杂度**：O(n³)

```cpp
#include <iostream>
#include <climits>
using namespace std;

const int MAXN = 100;
const int INF = INT_MAX / 2;

int dist[MAXN][MAXN];

void floydWarshall(int n) {
    // 动态规划
    for (int k = 1; k <= n; k++) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                if (dist[i][k] != INF && dist[k][j] != INF) {
                    dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j]);
                }
            }
        }
    }
}

int main() {
    int n, m;
    cin >> n >> m;
    
    // 初始化
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n; j++) {
            if (i == j) {
                dist[i][j] = 0;
            } else {
                dist[i][j] = INF;
            }
        }
    }
    
    for (int i = 0; i < m; i++) {
        int u, v, w;
        cin >> u >> v >> w;
        dist[u][v] = min(dist[u][v], w);  // 处理重边
    }
    
    floydWarshall(n);
    
    // 输出所有点对之间的最短距离
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n; j++) {
            if (dist[i][j] == INF) {
                cout << "INF ";
            } else {
                cout << dist[i][j] << " ";
            }
        }
        cout << endl;
    }
    
    return 0;
}
```

## 六、最小生成树

### 1. Kruskal 算法

**算法思想**：按边权值从小到大排序，依次加入不形成环的边。

**时间复杂度**：O(m log m)

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

const int MAXN = 100;

struct Edge {
    int u, v, w;
    bool operator<(const Edge& other) const {
        return w < other.w;
    }
};

vector<Edge> edges;
int parent[MAXN];

int find(int x) {
    if (parent[x] != x) {
        parent[x] = find(parent[x]);
    }
    return parent[x];
}

bool unionSet(int x, int y) {
    int rx = find(x), ry = find(y);
    if (rx == ry) return false;  // 已经在同一集合
    parent[rx] = ry;
    return true;
}

int kruskal(int n) {
    // 初始化并查集
    for (int i = 1; i <= n; i++) {
        parent[i] = i;
    }
    
    // 按边权值排序
    sort(edges.begin(), edges.end());
    
    int mstWeight = 0;
    int edgesCount = 0;
    
    for (Edge e : edges) {
        if (unionSet(e.u, e.v)) {
            mstWeight += e.w;
            edgesCount++;
            if (edgesCount == n - 1) break;  // 已经有 n-1 条边
        }
    }
    
    return mstWeight;
}

int main() {
    int n, m;
    cin >> n >> m;
    
    for (int i = 0; i < m; i++) {
        int u, v, w;
        cin >> u >> v >> w;
        edges.push_back({u, v, w});
    }
    
    int result = kruskal(n);
    cout << "最小生成树权值：" << result << endl;
    
    return 0;
}
```

### 2. Prim 算法

**算法思想**：从一个顶点开始，每次加入连接已选顶点集合和未选顶点集合的最小权值边。

**时间复杂度**：
- 朴素版：O(n²)
- 堆优化版：O(m log n)

## 七、洛谷练习题推荐

### 图论入门

- **P5318 【深基18.例3】查找文献**：DFS/BFS 模板题
- **P1330 封锁阳光大学**：图的染色
- **P1113 杂务**：拓扑排序

### 最短路

- **P3371 【模板】单源最短路径（弱化版）**：Dijkstra 模板
- **P4779 【模板】单源最短路径（标准版）**：Dijkstra + 堆优化
- **P3385 【模板】负环**：Bellman-Ford

### 最小生成树

- **P3366 【模板】最小生成树**：Kruskal/Prim 模板
- **P1111 修复公路**：最小生成树应用
- **P2820 局域网**：最小生成树应用

## 八、总结

图论是算法竞赛的核心内容，需要掌握：

1. **图的存储**：邻接矩阵、邻接表、链式前向星
2. **图遍历**：DFS、BFS
3. **最短路**：Dijkstra、Bellman-Ford、Floyd-Warshall
4. **最小生成树**：Kruskal、Prim

> **一句话**：图论题目千变万化，但核心算法就是这几个，多刷题就能掌握！

希望这篇文章能帮助你入门图论！
