---
title: 查找算法详解
date: 2026-06-13
tags: [算法, 查找, 二分, 哈希]
description: 深入讲解常用的查找算法：顺序查找、二分查找、哈希查找的原理、实现和应用场景。
---

# 查找算法详解

查找是在数据中找到目标元素的过程，是编程中最常用的操作之一。

## 一、查找算法分类

### 基于数据结构的查找

| 查找方式 | 时间复杂度 | 空间复杂度 | 前提条件 |
|----------|--------------|--------------|----------|
| 顺序查找 | O(n) | O(1) | 无 |
| 二分查找 | O(log n) | O(1) | 有序数组 |
| 哈希查找 | O(1) 平均 | O(n) | 哈希表 |
| 树表查找 | O(log n) | O(n) | 二叉搜索树 |

## 二、顺序查找（Sequential Search）

### 算法思想

从头到尾遍历数组，逐个比较。

### 实现代码

```cpp
#include <iostream>
using namespace std;

int sequentialSearch(int arr[], int n, int target) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == target) {
            return i;  // 找到，返回下标
        }
    }
    return -1;  // 未找到
}

int main() {
    int arr[] = {4, 2, 7, 1, 9, 3};
    int n = sizeof(arr) / sizeof(arr[0]);
    int target = 7;
    
    int result = sequentialSearch(arr, n, target);
    if (result != -1) {
        cout << "找到元素 " << target << "，下标为 " << result << endl;
    } else {
        cout << "未找到元素 " << target << endl;
    }
    
    return 0;
}
```

### 时间复杂度分析

- **平均情况**：O(n)
- **最坏情况**：O(n)
- **最佳情况**：O(1)（第一个元素就是目标）

## 三、二分查找（Binary Search）

### 算法思想

在有序数组中，每次将查找区间缩小一半。

### 实现代码（迭代版）

```cpp
#include <iostream>
#include <algorithm>
using namespace std;

int binarySearch(int arr[], int n, int target) {
    int left = 0, right = n - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target) {
            return mid;  // 找到
        } else if (arr[mid] < target) {
            left = mid + 1;  // 目标在右半部分
        } else {
            right = mid - 1;  // 目标在左半部分
        }
    }
    
    return -1;  // 未找到
}

int main() {
    int arr[] = {1, 3, 4, 7, 9, 12, 15};
    int n = sizeof(arr) / sizeof(arr[0]);
    int target = 7;
    
    // 二分查找要求数组有序
    sort(arr, arr + n);
    
    int result = binarySearch(arr, n, target);
    if (result != -1) {
        cout << "找到元素 " << target << "，下标为 " << result << endl;
    } else {
        cout << "未找到元素 " << target << endl;
    }
    
    return 0;
}
```

### 实现代码（递归版）

```cpp
int binarySearchRecursive(int arr[], int left, int right, int target) {
    if (left > right) {
        return -1;  // 基准情况：未找到
    }
    
    int mid = left + (right - left) / 2;
    
    if (arr[mid] == target) {
        return mid;
    } else if (arr[mid] < target) {
        return binarySearchRecursive(arr, mid + 1, right, target);
    } else {
        return binarySearchRecursive(arr, left, mid - 1, target);
    }
}
```

### 时间复杂度分析

- **时间复杂度**：O(log n)
- **空间复杂度**：O(1)（迭代版），O(log n)（递归版）
- **前提条件**：数组必须有序

### 二分查找的变种

#### 1. 查找第一个等于目标的元素

```cpp
int binarySearchFirst(int arr[], int n, int target) {
    int left = 0, right = n - 1;
    int result = -1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target) {
            result = mid;
            right = mid - 1;  // 继续在左半部分查找
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return result;
}
```

#### 2. 查找插入位置

```cpp
int searchInsert(int arr[], int n, int target) {
    int left = 0, right = n;
    
    while (left < right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    return left;
}
```

## 四、哈希查找（Hash Search）

### 算法思想

通过哈希函数将关键字映射到表中的位置，实现平均 O(1) 的查找。

### 哈希表实现（开放定址法）

```cpp
#include <iostream>
using namespace std;

const int TABLE_SIZE = 10;

int hashFunction(int key) {
    return key % TABLE_SIZE;
}

void insert(int hashTable[], int key) {
    int index = hashFunction(key);
    
    // 线性探测
    while (hashTable[index] != -1) {
        index = (index + 1) % TABLE_SIZE;
    }
    
    hashTable[index] = key;
}

bool search(int hashTable[], int key) {
    int index = hashFunction(key);
    int startIndex = index;
    
    while (hashTable[index] != -1) {
        if (hashTable[index] == key) {
            return true;
        }
        index = (index + 1) % TABLE_SIZE;
        if (index == startIndex) {
            break;  // 回到起点，表已满或元素不存在
        }
    }
    
    return false;
}

int main() {
    int hashTable[TABLE_SIZE];
    for (int i = 0; i < TABLE_SIZE; i++) {
        hashTable[i] = -1;  // -1 表示空位
    }
    
    insert(hashTable, 10);
    insert(hashTable, 22);
    insert(hashTable, 31);
    
    cout << "查找 22：" << (search(hashTable, 22) ? "找到" : "未找到") << endl;
    cout << "查找 15：" << (search(hashTable, 15) ? "找到" : "未找到") << endl;
    
    return 0;
}
```

### 哈希冲突解决方法

1. **开放定址法**：线性探测、二次探测、双重哈希
2. **链地址法**：每个位置是一个链表
3. **再哈希法**：使用多个哈希函数

## 五、查找算法的选择

### 如何选择查找算法？

1. **数据量小，无序**：顺序查找
2. **数据量中等，有序**：二分查找
3. **数据量大，频繁查找**：哈希表
4. **需要动态插入删除**：二叉搜索树、AVL树、红黑树

### 实际应用建议

- **C++**：使用 `binary_search()`、`lower_bound()`、`upper_bound()`
- **Java**：使用 `Arrays.binarySearch()`、`HashMap`
- **Python**：使用 `in` 操作符、`bisect` 模块、`dict`

## 六、洛谷练习题推荐

### 二分查找入门

- **P2249 【深基13.例1】查找**
- **P1102 A-B 数对**（二分思想）
- **P1678 烦恼的高考志愿**

### 二分答案（进阶）

- **P1873 [USACO12DEC] 牛奶的单价**
- **P2440 木材加工**
- **P1182 数列分段 Section II**

### 哈希查找

- **P1102 A-B 数对**（哈希表）
- **P3370 【模板】字符串哈希**
- **P1319 压缩不完全的字符串**

## 七、常见错误

### 1. 二分查找的边界错误

```cpp
// 错误：可能死循环
while (left < right) {
    int mid = left + (right - left) / 2;
    if (arr[mid] == target) {
        return mid;
    } else if (arr[mid] < target) {
        left = mid;  // 错误！应该是 mid + 1
    } else {
        right = mid;
    }
}
```

### 2. 忘记排序

```cpp
// 错误：数组无序，二分查找失效
int arr[] = {4, 2, 7, 1, 9, 3};
int result = binarySearch(arr, n, 7);  // 错误！
```

**改进**：先排序 `sort(arr, arr + n);`

### 3. 哈希表大小选择

```cpp
// 错误：表太小，冲突太多
const int TABLE_SIZE = 5;  // 太小！
```

**改进**：选择质数作为表大小，如 1009、10007、100019

## 八、总结

查找算法是算法学习的重要部分，重点掌握：

1. **顺序查找**：最简单，但效率低
2. **二分查找**：效率高，但要求有序
3. **哈希查找**：平均 O(1)，但需要额外空间

> **一句话**：不同的查找算法适用于不同的场景，理解它们的优缺点才能正确选择！

希望这篇文章能帮助你深入理解查找算法！
