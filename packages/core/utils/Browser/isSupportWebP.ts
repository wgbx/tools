/**
 * 检测当前浏览器是否支持 WebP 图片格式。
 * @returns {boolean} 如果浏览器支持 WebP 图片格式则返回 true，否则返回 false
 * @example
 * // 示例 1: 检测浏览器是否支持 WebP 格式
 * const isSupported = isSupportWebP();
 * console.log(isSupported); // 输出 true 或 false
 */
export function isSupportWebP() {
  const canvas = document.createElement('canvas')
  if (!canvas.toDataURL) {
    return false
  }
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0
}
