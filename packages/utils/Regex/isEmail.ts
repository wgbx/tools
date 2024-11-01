/**
 * 判断给定的字符串是否为有效的电子邮件地址。
 *
 * @param {string} value - 要验证的字符串
 * @returns {boolean} 如果字符串是有效的电子邮件地址则返回 true，否则返回 false
 *
 * @example
 * // 示例 1: 验证有效的电子邮件地址
 * const isValid1 = isEmail("test@example.com");
 * console.log(isValid1); // 输出 true
 *
 * // 示例 2: 验证无效的电子邮件地址
 * const isValid2 = isEmail("testexample.com");
 * console.log(isValid2); // 输出 false
 */
export function isEmail(value) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
}
