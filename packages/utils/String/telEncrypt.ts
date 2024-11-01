/**
 * 对手机号进行加密处理
 *
 * @param {number} tel - 需要加密的手机号
 * @returns {string} - 加密后的手机号
 *
 * @example
 * const encryptedTel = telEncrypt(1234567890);
 * console.log(encryptedTel); // 输出: "123****7890"
 */
export function telEncrypt(tel) {
  return tel.toString().replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
}
