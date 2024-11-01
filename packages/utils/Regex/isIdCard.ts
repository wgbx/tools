/**
 * 判断给定的身份证号码是否合法。
 *
 * @param {string} str - 要验证的身份证号码
 * @param {number} [type=0] - 身份证号码类型 (0: 18 位身份证, 1: 1 代身份证, 2: 2 代身份证)
 * @returns {boolean} 如果身份证号码合法则返回 true，否则返回 false
 *
 * @example
 * // 示例 1: 验证 18 位身份证号码
 * const isValid1 = isIdCard("身份证号码", 0);
 * console.log(isValid1); // 输出 true 或 false
 *
 * // 示例 2: 验证 1 代身份证号码
 * const isValid2 = isIdCard("身份证号码", 1);
 * console.log(isValid2); // 输出 true 或 false
 *
 * // 示例 3: 验证 2 代身份证号码
 * const isValid3 = isIdCard("身份证号码", 2);
 * console.log(isValid3); // 输出 true 或 false
 */
export function isIdCard(str, type = 0) {
  // 正则表达式用于验证 18 位身份证号码
  const reg =
    /^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/

  // 正则表达式用于验证 1 代身份证号码
  const reg1 = /^[1-9]\d{7}(?:0\d|10|11|12)(?:0[1-9]|[1-2][\d]|30|31)\d{3}$/

  // 正则表达式用于验证 2 代身份证号码
  const reg2 = /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/

  switch (type) {
    case 1:
      return reg1.test(str)
    case 2:
      return reg2.test(str)
    default:
      return reg.test(str)
  }
}
