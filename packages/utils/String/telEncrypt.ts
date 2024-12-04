import { isNumber } from '../../index'
import { ERROR_MUST_NUMBER } from '../../constant/index'

/**
 * 对手机号进行加密处理
 * @param {number} tel - 需要加密的手机号
 * @returns {string} - 加密后的手机号
 * @throws {Error} - 当输入的参数不是数值类型时，抛出错误，错误消息提示参数必须为数值类型
 * @example
 * const encryptedTel = telEncrypt(1234567890);
 * console.log(encryptedTel); // 输出: "123****7890"
 */

export function telEncrypt(tel: number): string {
  if (isNumber(tel)) {
    return tel.toString().replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
  }
  throw new Error(ERROR_MUST_NUMBER)
}
