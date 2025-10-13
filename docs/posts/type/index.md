---
title: Type
---

# Type

## isNumber

🎯判断给定的值是否为数值类型

```typescript
/**
 * @param {*} val - 需要进行类型判断的任意值
 * @returns {boolean} - 如果传入值是数值类型，则返回 `true`，否则返回 `false`
 * @example
 * console.log(isNumber(123)); // 输出 `true`
 * console.log(isNumber('hello')); // 输出 `false`
 */
```

## isString

🎯判断给定的值是否为字符串类型

```typescript
/**
 * @param {*} val - 需要进行类型判断的任意值
 * @returns {boolean} - 如果传入值是字符串类型，则返回 `true`，否则返回 `false`
 * @example
 * console.log(isString('hello')); // 输出 `true`
 * console.log(isString(123)); // 输出 `false`
 */
```

## isSupport

🎯判断当前浏览器是否支持指定的API

```typescript
/**
 * @param {string} api - 需要检查的API名称
 * @param {boolean} error - 是否在浏览器不支持时抛出错误，默认为true
 * @returns {boolean} - 如果浏览器支持该API，则返回true，否则返回false
 * @example
 * console.log(isSupport('localStorage')); // 输出 true 或 false
 */
```
