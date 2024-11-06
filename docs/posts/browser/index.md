---
title: Browser
---

# Browser

## downloadImageAsync

🎯异步下载指定 URL 的图片，并保存为文件

```typescript
/**
 * @func downloadImageAsync
 * @desc 异步下载指定URL的图片，并保存为文件
 * @param {string} url 图片的URL地址
 * @param {string} [filename] 文件名，默认为随机字符串
 * @returns {Promise<void>} 下载完成后返回一个Promise，无返回值
 * @example
 * // 下载名为"my-image.jpg"的图片
 * downloadImageAsync('https://example.com/images/my-image.jpg', 'my-image.jpg')
 *   .then(() => console.log('Image downloaded successfully'))
 *   .catch((error) => console.error(error));
 */
```

## exitFullScreen

🎯退出全屏模式

```typescript
/**
 * @func exitFullScreen
 * @desc 退出全屏
 * @returns {void}
 * @example
 * // 示例：退出全屏模式
 * exitFullScreen();
 */
```

## isSupportWebP

🎯检测当前浏览器是否支持 WebP 图片格式

```typescript
/**
 * @func isSupportWebP
 * @desc 检测当前浏览器是否支持 WebP 图片格式
 * @returns {boolean} 如果浏览器支持 WebP 图片格式则返回 true，否则返回 false
 * @example
 * // 示例 1: 检测浏览器是否支持 WebP 格式
 * const isSupported = isSupportWebP();
 * console.log(isSupported); // 输出 true 或 false
 */
```

## toFullScreen

🎯进入全屏模式

```typescript
/**
 * @func toFullScreen
 * @desc 进入全屏模式
 * @returns {void}
 * @example
 * // 示例 1: 进入全屏模式
 * toFullScreen();
 */
```
