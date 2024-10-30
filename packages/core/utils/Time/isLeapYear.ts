/**
 * 判断给定的年份是否为闰年。
 *
 * @param {number} year - 要判断的年份
 * @returns {boolean} 如果是闰年则返回 true，否则返回 false
 *
 * @example
 * // 示例 1: 2020 年是闰年，输出 true
 * const result1 = isLeapYear(2020);
 * console.log(result1); // 输出 true
 *
 * // 示例 2: 2000 年是闰年，输出 true
 * const result2 = isLeapYear(2000);
 * console.log(result2); // 输出 true
 *
 * // 示例 3: 1900 年不是闰年，输出 false
 * const result3 = isLeapYear(1900);
 * console.log(result3); // 输出 false
 */
export function isLeapYear(year) {
  if (0 === year % 4 && (year % 100 !== 0 || year % 400 === 0)) {
    return true
  }
  return false
}
