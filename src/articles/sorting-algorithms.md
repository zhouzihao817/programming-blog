---
title: 排序算法详解
date: 2026-06-13
tags: [算法, 排序, 快排, 归并, 堆排序]
description: 深入讲解常用的排序算法：快速排序、归并排序、堆排序的原理、实现和时间复杂度分析。
---

# 排序算法详解

排序是最基础的算法之一，几乎所有编程语言都内置了排序函数。但理解排序算法的原理，对提高算法思维非常重要。

## 一、排序算法分类

### 比较类排序

通过比较元素大小来决定相对次序：

| 算法 | 平均时间复杂度 | 最坏时间复杂度 | 空间复杂度 | 稳定性 |
|------|----------------|------------------|--------------|----------|
| 冒泡排序 | O(n²) | O(n²) | O(1) | 稳定 |
| 选择排序 | O(n²) | O(n²) | O(1) | 不稳定 |
| 插入排序 | O(n²) | O(n²) | O(1) | 稳定 |
| 快速排序 | O(n log n) | O(n²) | O(log n) | 不稳定 |
| 归并排序 | O(n log n) | O(n log n) | O(n) | 稳定 |
| 堆排序 | O(n log n) | O(n log n) | O(1) | 不稳定 |

### 非比较类排序

| 算法 | 时间复杂度 | 空间复杂度 | 适用场景 |
|------|--------------|--------------|----------|
| 计数排序 | O(n + k) | O(k) | 整数，范围小 |
| 基数排序 | O(n × k) | O(n + k) | 整数或字符串 |
| 桶排序 | O(n + k) | O(n + k) | 均匀分布 |

## 二、快速排序（Quick Sort）

### 算法思想

分治法：选择一个基准元素，将数组分成两部分，左边都比基准小，右边都比基准大，然后递归排序。

### 实现代码

```cpp
#include <iostream>
using namespace std;

// 分区函数
int partition(int arr[], int low, int high) {
    int pivot = arr[high];  // 选择最后一个元素作为基准
    int i = low - 1;  // 较小元素的索引
    
    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return i + 1;
}

// 快速排序
void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

int main() {
    int arr[] = {10, 7, 8, 9, 1, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    
    quickSort(arr, 0, n - 1);
    
    cout << "排序后：";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    return 0;
}
```

### 时间复杂度分析

- **平均情况**：O(n log n)
- **最坏情况**：O(n²)（数组已经有序）
- **最佳情况**：O(n log n)

### 优化方法

1. **随机化**：随机选择基准元素
2. **三数取中**：选择左端、右端和中间三个元素的中值作为基准
3. **小数组用插入排序**：当子数组较小时，插入排序更快

## 三、归并排序（Merge Sort）

### 算法思想

分治法：将数组分成两半，分别排序，然后合并两个有序数组。

### 实现代码

```cpp
#include <iostream>
using namespace std;

// 合并两个有序数组
void merge(int arr[], int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;
    
    int L[n1], R[n2];
    
    for (int i = 0; i < n1; i++) {
        L[i] = arr[left + i];
    }
    for (int j = 0; j < n2; j++) {
        R[j] = arr[mid + 1 + j];
    }
    
    int i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

// 归并排序
void mergeSort(int arr[], int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}

int main() {
    int arr[] = {12, 11, 13, 5, 6, 7};
    int n = sizeof(arr) / sizeof(arr[0]);
    
    mergeSort(arr, 0, n - 1);
    
    cout << "排序后：";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    return 0;
}
```

### 时间复杂度分析

- **平均情况**：O(n log n)
- **最坏情况**：O(n log n)
- **最佳情况**：O(n log n)
- **空间复杂度**：O(n)

### 归并排序 vs 快速排序

| 特性 | 归并排序 | 快速排序 |
|------|----------|----------|
| 时间复杂度（最坏） | O(n log n) | O(n²) |
| 空间复杂度 | O(n) | O(log n) |
| 稳定性 | 稳定 | 不稳定 |
| 适用场景 | 链表排序、外部排序 | 数组排序 |

## 四、堆排序（Heap Sort）

### 算法思想

利用堆这种数据结构设计的排序算法。堆是一个近似完全二叉树的结构，并同时满足堆的性质。

### 实现代码

```cpp
#include <iostream>
using namespace std;

// 堆化函数
void heapify(int arr[], int n, int i) {
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;
    
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest != i) {
        swap(arr[i], arr[largest]);
        heapify(arr, n, largest);
    }
}

// 堆排序
void heapSort(int arr[], int n) {
    // 构建最大堆
    for (int i = n / 2 - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
    
    // 一个个从堆顶取出元素
    for (int i = n - 1; i > 0; i--) {
        swap(arr[0], arr[i]);
        heapify(arr, i, 0);
    }
}

int main() {
    int arr[] = {4, 10, 3, 5, 1};
    int n = sizeof(arr) / sizeof(arr[0]);
    
    heapSort(arr, n);
    
    cout << "排序后：";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    return 0;
}
```

### 时间复杂度分析

- **平均情况**：O(n log n)
- **最坏情况**：O(n log n)
- **最佳情况**：O(n log n)
- **空间复杂度**：O(1)

## 五、排序算法的选择

### 如何选择排序算法？

1. **数据量小（n < 100）**：插入排序或冒泡排序
2. **数据量中等（100 ≤ n ≤ 10⁵）**：快速排序（平均最快）
3. **数据量 large（n > 10⁵）**：归并排序或堆排序
4. **要求稳定性**：归并排序
5. **空间受限**：堆排序

### 实际应用建议

- **C++**：使用 `sort()`（改进的快速排序）
- **Java**：使用 `Arrays.sort()`（改进的归并排序）
- **Python**：使用 `sorted()` 或 `list.sort()`（Timsort）

## 六、洛谷练习题推荐

### 排序入门

- **P1177 【模板】快速排序**：必须掌握
- **P1059 明明的随机数**：排序 + 去重
- **P1104 生日**：结构体排序

### 排序进阶

- **P1068 分数线划定**：排序 + 筛选
- **P1781 宇宙总统**：大数排序
- **P2587 天朝的饮食问题**：稳定排序

## 七、常见错误

### 1. 快排最坏情况

```cpp
// 错误：选择第一个元素作为基准，对有序数组会退化到 O(n²)
int partition(int arr[], int low, int high) {
    int pivot = arr[low];  // 不好！
    // ...
}
```

**改进**：随机选择基准或三数取中

### 2. 归并排序空间溢出

```cpp
// 错误：数组大小不够
int L[n1], R[n2];  // n1 或 n2 很大时可能栈溢出
```

**改进**：使用动态分配或全局数组

### 3. 堆排序下标错误

```cpp
// 错误：堆的下标从 0 开始时，左右孩子下标计算错误
int left = 2 * i;  // 应该是 2 * i + 1
```

## 八、总结

排序算法是算法学习的基础，重点掌握：

1. **快速排序**：平均最快，但要理解最坏情况
2. **归并排序**：稳定，时间复杂度稳定
3. **堆排序**：空间效率最高

> **一句话**：排序算法不仅要会写，更要理解它们的思想和适用场景！

希望这篇文章能帮助你深入理解排序算法！
