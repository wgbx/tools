import { getTypeOf } from '../Function/getTypeOf'

/**
 * 判断给定的值是否为数值类型
 * @param {*} val - 需要进行类型判断的任意值
 * @returns {boolean} - 如果传入值是数值类型，则返回 `true`，否则返回 `false`
 * @example
 * console.log(isString('hello')); // 输出 `true`
 * console.log(isString(123)); // 输出 `false`
 */
export function isNumber(val) {
  return getTypeOf(val) === 'number'
}
