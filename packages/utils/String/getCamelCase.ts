import { ERROR_MUST_STRING } from '../../constant/index'
import { isString } from '../../index'

/**
 * 将字符串转换为 camel case 格式
 * @param {string} str - 需要转换的字符串
 * @returns {string} - 转换后的 camel case 格式字符串
 * @throws {Error} - 当输入的参数不是字符串类型时，抛出错误，错误消息提示参数必须为字符串类型
 * @example
 * const camelCaseStr = getCamelCase("hello-world");
 * console.log(camelCaseStr); // 输出: "helloWorld"
 */
export function getCamelCase(str: string) {
  if (isString(str)) {
    return str.replace(/-([a-z])/g, (i, item) => item.toUpperCase())
  }
  throw new Error(ERROR_MUST_STRING)
}
