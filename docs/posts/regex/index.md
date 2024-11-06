---
title: Regex
---

# Regex

## isEmail

🎯判断给定的字符串是否为有效的电子邮件地址

```typescript
/**
 * @func isEmail
 * @desc 判断给定的字符串是否为有效的电子邮件地址
 * @param {string} value - 要验证的字符串
 * @returns {boolean} 如果字符串是有效的电子邮件地址则返回 true，否则返回 false
 * @example
 * // 示例 1: 验证有效的电子邮件地址
 * const isValid1 = isEmail("test@example.com");
 * console.log(isValid1); // 输出 true
 *
 * // 示例 2: 验证无效的电子邮件地址
 * const isValid2 = isEmail("testexample.com");
 * console.log(isValid2); // 输出 false
 */
```

## isIdCard

🎯判断给定的身份证号码是否合法。

```typescript
/**
 * @func isIdCard
 * @desc 判断给定的身份证号码是否合法。
 * @param {string} str - 要验证的身份证号码
 * @param {number} [type=0] - 身份证号码类型 (0: 18 位身份证, 1: 1 代身份证, 2: 2 代身份证)
 * @returns {boolean} 如果身份证号码合法则返回 true，否则返回 false
 * @example
 * // 示例 1: 验证 18 位身份证号码
 * const isValid1 = isIdCard("身份证号码", 0);
 * console.log(isValid1); // 输出 true 或 false
 *
 * // 示例 2: 验证 1 代身份证号码
 * const isValid2 = isIdCard("身份证号码", 1);
 * console.log(isValid2); // 输出 true 或 false
 *
 * // 示例 3: 验证 2 代身份证号码
 * const isValid3 = isIdCard("身份证号码", 2);
 * console.log(isValid3); // 输出 true 或 false
 */
```

## isMobile

🎯检查当前用户是否在移动设备上浏览

```typescript
/**
 * @func isMobile
 * @desc 检查当前用户是否在移动设备上浏览
 * @returns {boolean} 如果是移动设备返回 `true`，否则返回 `false`
 * @example
 * console.log(isMobile())
 * // 输出：true 或 false
 */
```

## isTelNumber

🎯判断给定的字符串是否为有效的手机号码

```typescript
/**
 * @func isTelNumber
 * @desc 判断给定的字符串是否为有效的手机号码
 * @param {string} str - 要验证的字符串
 * @returns {boolean} 如果字符串是有效的手机号码则返回 true，否则返回 false
 * @example
 * // 示例 1: 验证有效的手机号码
 * const isValid1 = isTelNumber("13812345678");
 * console.log(isValid1); // 输出 true
 *
 * // 示例 2: 验证无效的手机号码
 * const isValid2 = isTelNumber("12345678");
 * console.log(isValid2); // 输出 false
 */
```

## isUrl

🎯判断给定的字符串是否为有效的 URL 地址

```typescript
/**
 * @func isUrl
 * @desc 判断给定的字符串是否为有效的URL地址
 * @param {string} str - 要验证的字符串
 * @returns {boolean} 如果字符串是有效的URL地址则返回 true，否则返回 false
 * @example
 * // 示例 1: 验证有效的URL地址
 * const isValid1 = isUrl("https://www.example.com");
 * console.log(isValid1); // 输出 true
 *
 * // 示例 2: 验证无效的URL地址
 * const isValid2 = isUrl("example.com");
 * console.log(isValid2); // 输出 false
 */
```
