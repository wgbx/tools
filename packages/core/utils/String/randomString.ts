/**
 * 生成指定长度的随机字符串
 *
 * @param {number} len - 生成的随机字符串的长度，默认为 8
 * @returns {string} - 生成的随机字符串
 * @example
 * const randomStr = randomString(8);
 * console.log(randomStr); // 输出: "2nqR5t7F"
 */
export function randomString(len = 8) {
  let chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789';
  let strLen = chars.length;
  let randomStr = '';
  for (let i = 0; i < len; i++) {
    randomStr += chars.charAt(Math.floor(Math.random() * strLen));
  }
  return randomStr;
}