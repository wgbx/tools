---
title: Object
---

# Object

## objectToQueryString

🎯将一个对象转换为查询字符串

```typescript
/**
 * @func objectToQueryString
 * @desc 将一个对象转换为查询字符串
 * @param {Record<string, string>} obj - 需要转换为URL查询参数的对象，其中键和值均为字符串
 * @returns {string} - 格式化后的查询字符串
 * @example
 * ```javascript
 * const params = { name: 'John Doe', age: '30' };
 * const queryString = objectToQueryString(params);
 * console.log(queryString); // 输出："name=John%20Doe&age=30"
```
