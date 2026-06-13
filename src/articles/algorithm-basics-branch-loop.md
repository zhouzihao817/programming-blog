---
title: 算法基础：分支与循环
date: 2026-06-13
tags: [算法, 基础, 分支, 循环, C++]
description: 掌握编程最基础的两个概念：分支结构和循环结构，这是所有算法的基石。
---

# 算法基础：分支与循环

分支和循环是编程的两种基本控制结构，几乎所有算法都由它们组合而成。

## 一、分支结构

分支结构让程序能够根据条件选择不同的执行路径。

### 1. if-else 语句

```cpp
#include <iostream>
using namespace std;

int main() {
    int score;
    cin >> score;
    
    if (score >= 90) {
        cout << "优秀" << endl;
    } else if (score >= 60) {
        cout << "及格" << endl;
    } else {
        cout << "不及格" << endl;
    }
    
    return 0;
}
```

### 2. switch 语句

当需要判断多个固定值时，switch 更清晰：

```cpp
#include <iostream>
using namespace std;

int main() {
    int day;
    cin >> day;
    
    switch (day) {
        case 1: cout << "星期一"; break;
        case 2: cout << "星期二"; break;
        case 3: cout << "星期三"; break;
        case 4: cout << "星期四"; break;
        case 5: cout << "星期五"; break;
        case 6: cout << "星期六"; break;
        case 7: cout << "星期日"; break;
        default: cout << "输入错误";
    }
    
    return 0;
}
```

### 3. 三元运算符

简单的二选一可以用三元运算符：

```cpp
int max = (a > b) ? a : b;
```

## 二、循环结构

循环结构让程序能够重复执行某段代码。

### 1. for 循环

适用于已知循环次数的情况：

```cpp
// 计算 1 到 100 的和
int sum = 0;
for (int i = 1; i <= 100; i++) {
    sum += i;
}
cout << "总和：" << sum << endl;
```

### 2. while 循环

适用于未知循环次数，但知道循环条件的情况：

```cpp
// 猜数字游戏
int target = 42;
int guess;
while (true) {
    cin >> guess;
    if (guess == target) {
        cout << "猜对了！" << endl;
        break;
    } else if (guess < target) {
        cout << "太小了" << endl;
    } else {
        cout << "太大了" << endl;
    }
}
```

### 3. do-while 循环

至少执行一次的情况：

```cpp
// 菜单选择
int choice;
do {
    cout << "1. 开始游戏" << endl;
    cout << "2. 查看排名" << endl;
    cout << "3. 退出" << endl;
    cin >> choice;
} while (choice != 3);
```

## 三、循环控制语句

### 1. break

立即跳出整个循环：

```cpp
for (int i = 1; i <= 100; i++) {
    if (i == 50) {
        break;  // 当 i=50 时退出循环
    }
    cout << i << " ";
}
```

### 2. continue

跳过本次循环，继续下一次：

```cpp
// 输出 1-100 中的所有奇数
for (int i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        continue;  // 跳过偶数
    }
    cout << i << " ";
}
```

## 四、嵌套循环

循环里面可以再套循环，用于处理多维问题：

```cpp
// 打印九九乘法表
for (int i = 1; i <= 9; i++) {
    for (int j = 1; j <= i; j++) {
        cout << j << "×" << i << "=" << i*j << " ";
    }
    cout << endl;
}
```

## 五、经典例题

### 例题 1：判断素数

```cpp
#include <iostream>
#include <cmath>
using namespace std;

bool isPrime(int n) {
    if (n < 2) return false;
    for (int i = 2; i <= sqrt(n); i++) {
        if (n % i == 0) return false;
    }
    return true;
}

int main() {
    int n;
    cin >> n;
    if (isPrime(n)) {
        cout << "是素数" << endl;
    } else {
        cout << "不是素数" << endl;
    }
    return 0;
}
```

### 例题 2：百钱百鸡问题

```cpp
// 公鸡5元/只，母鸡3元/只，小鸡1元/3只
// 用100元买100只鸡，问各多少只？
for (int x = 0; x <= 20; x++) {        // 公鸡
    for (int y = 0; y <= 33; y++) {    // 母鸡
        int z = 100 - x - y;             // 小鸡
        if (z % 3 == 0 && 5*x + 3*y + z/3 == 100) {
            cout << "公鸡：" << x << " 母鸡：" << y << " 小鸡：" << z << endl;
        }
    }
}
```

## 六、常见错误

1. **死循环**：循环条件永远为 true
   ```cpp
   while (1) {  // 死循环！
       cout << "hello" << endl;
   }
   ```

2. **off-by-one 错误**：循环边界错误
   ```cpp
   for (int i = 0; i < 10; i++) {  // 0-9，共10次
   for (int i = 1; i <= 10; i++) {  // 1-10，共10次
   ```

3. **忘记更新循环变量**
   ```cpp
   int i = 0;
   while (i < 10) {
       cout << i << endl;
       // 忘记 i++，死循环！
   }
   ```

## 七、练习题推荐

- **洛谷 P5708 【深基2.习2】三角形面积**：简单的分支+数学
- **洛谷 P5709 【深基2.习6】Apples Prologue / 苹果和虫子**：循环入门
- **洛谷 P5710 【深基3.例2】数的性质**：if-else 综合练习
- **洛谷 P5711 【深基3.例3】闰年判断**：分支结构经典题

> **小贴士**：分支和循环是编程的基础中的基础，多写多练才能熟练掌握！

希望这篇文章能帮助你打好算法基础！
