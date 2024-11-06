---
title: String
---

# String

## firstUpperCase

🎯将字符串的首字母大写

```typescript
/**
 * @func firstUpperCase
 * @desc 将字符串的首字母大写
 * @param {string} str - 输入的字符串
 * @returns {string} 首字母大写的字符串
 * @example
 * console.log(capitalizeFirstLetter("hello")); // 输出 "Hello"
 * console.log(capitalizeFirstLetter("world")); // 输出 "World"
 */
```

## getCamelCase

🎯将字符串转换为 camel case 格式

```typescript
/**
 * @func getCamelCase
 * @desc 将字符串转换为 camel case 格式
 * @param {string} str - 需要转换的字符串
 * @returns {string} - 转换后的 camel case 格式字符串
 * @example
 * const camelCaseStr = getCamelCase("hello-world");
 * console.log(camelCaseStr); // 输出: "helloWorld"
 */
```

## getKebabCase

🎯将字符串转换为 kebab case 格式

```typescript
/**
 * @func getKebabCase
 * @desc 将字符串转换为 kebab case 格式
 * @param {string} str - 需要转换的字符串
 * @returns {string} - 转换后的 kebab case 格式字符串
 * @example
 * const kebabCaseStr = getKebabCase("HelloWorld");
 * console.log(kebabCaseStr); // 输出: "hello-world"
 */
```

## randomString

🎯生成指定长度的随机字符串

```typescript
/**
 * @func isUrl
 * @desc 生成指定长度的随机字符串
 * @param {number} len - 生成的随机字符串的长度，默认为 8
 * @returns {string} - 生成的随机字符串
 * @example
 * const randomStr = randomString(8);
 * console.log(randomStr); // 输出: "2nqR5t7F"
 */
```

## telEncrypt

🎯对手机号进行加密处理

```typescript
/**
 * @func telEncrypt
 * @desc 对手机号进行加密处理
 * @param {number} tel - 需要加密的手机号
 * @returns {string} - 加密后的手机号
 * @example
 * const encryptedTel = telEncrypt(1234567890);
 * console.log(encryptedTel); // 输出: "123****7890"
 */
```

## toAbsoluteUrl

🎯将相对 URL 转换为绝对 URL，如果需要则添加主机名前缀

```typescript
/**
 * @func toAbsoluteUrl
 * @desc 将相对URL转换为绝对URL，如果需要则添加主机名前缀
 * @param {string} url - 相对URL。
 * @param {string} [host=location.origin] - 主机名URL。
 * @returns {string} 绝对URL。
 * @example
 * // 示例用法：
 * const absoluteUrl = toAbsoluteUrl('/path/to/resource', 'https://www.example.com');
 * console.log(absoluteUrl); // 输出：https://www.example.com/path/to/resource
 */
```
