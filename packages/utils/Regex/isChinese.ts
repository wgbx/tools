import { isString } from '../../index'

/**
 * 判断给定的字符串是否全部由中文汉字组成
 * @param {string} str - 要进行判断的字符串
 * @returns {boolean} - 如果输入的字符串全部由中文汉字组成，返回 `true`；否则返回 `false`
 * @example
 * console.log(isChinese("你好")); // 输出 `true`
 * console.log(isChinese("hello你好")); // 输出 `false`
 * console.log(isChinese("")); // 输出 `false`
 */

export const isChinese = (str: string): boolean => {
  if (isString(str)) {
    return /^[\u4E00-\u9FA5]+$/.test(str)
  }
  return false
}
