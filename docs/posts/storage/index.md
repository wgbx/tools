---
title: Storage
---

# Storage

## setLocalStorage

🎯设置localStorage数据，支持过期时间

```typescript
/**
 * 将数据存储在localStorage中
 * @param {string} key - 存储数据使用的键
 * @param {string} data - 要存储的数据
 * @param {number} expiredTime - 数据过期时间（秒）
 * @example
 * setLocalStorage("userInfo", JSON.stringify({name: "John"}), 3600); // 将用户信息存储1小时
 */
```

## getLocalStorage

🎯获取localStorage过期时间内的数据

```typescript
/**
 * @func getLocalStorage
 * @desc 从localStorage中获取存储的数据，如果数据已过期，则删除该数据
 * @param {string} key - 要获取的数据的键
 * @returns {any} 返回存储的数据，如果数据不存在或已过期则返回null
 * @example
 * console.log(getLocalStorage("userInfo")); // 输出存储的用户信息或null
 */
```

## removeLocalStorage

🎯删除localStorage数据

```typescript
/**
 * @func removeLocalStorage
 * @desc 从localStorage中删除指定的数据
 * @param {string} key - 要删除的数据的键
 * @example
 * removeLocalStorage("userInfo"); // 删除存储的用户信息
 */
```
