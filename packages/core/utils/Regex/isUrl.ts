/**
 * 判断给定的字符串是否为有效的URL地址。
 *
 * @param {string} str - 要验证的字符串
 * @returns {boolean} 如果字符串是有效的URL地址则返回 true，否则返回 false
 *
 * @example
 * // 示例 1: 验证有效的URL地址
 * const isValid1 = isUrl("https://www.example.com");
 * console.log(isValid1); // 输出 true
 *
 * // 示例 2: 验证无效的URL地址
 * const isValid2 = isUrl("example.com");
 * console.log(isValid2); // 输出 false
 */
export function isUrl(str: string) {
  return /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/.test(str)
}
