import { ERROR_MUST_STRING } from '../../constant/index'
import { isString } from '../../index'

/**
 * 将字符串的首字母大写
 * @param {string} str - 输入的字符串
 * @returns {string} 首字母大写的字符串
 * @throws {Error} - 当输入的参数不是字符串类型时，抛出错误，错误消息提示参数必须为字符串类型
 * @example
 * console.log(capitalizeFirstLetter("hello")); // 输出 "Hello"
 * console.log(capitalizeFirstLetter("world")); // 输出 "World"
 */
export function firstUpperCase(str: string) {
  if (isString(str)) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  throw new Error(ERROR_MUST_STRING)
}
