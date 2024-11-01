/**
 * 将相对URL转换为绝对URL，如果需要则添加主机名前缀。
 * @param {string} url - 相对URL。
 * @param {string} [host=location.origin] - 主机名URL。
 * @returns {string} 绝对URL。
 * @example
 * // 示例用法：
 * const absoluteUrl = toAbsoluteUrl('/path/to/resource', 'https://www.example.com');
 * console.log(absoluteUrl); // 输出：https://www.example.com/path/to/resource
 */
export function toAbsoluteUrl(url: string, host = location.origin): string {
  if (!url) {
    return ''
  }

  return url.startsWith('http') ? url : `${host}${url}`
}
