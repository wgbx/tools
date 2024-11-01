/**
 * 判断给定的字符串是否为有效的手机号码。
 *
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
export function isTelNumber(str: string) {
  return /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/.test(str)
}
