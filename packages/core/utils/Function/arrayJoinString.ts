/**
 * 将数组连接成字符串
 *
 * @param {any[]} arr 待连接的数组
 * @param {string} [delimiter=','] 分隔符，默认为逗号
 * @returns {string} 返回由数组元素组成的字符串，使用指定的分隔符分隔
 * @example
 * const arr = [1, 2, 3];
 * const str = arrayJoinString(arr, ',');
 * // str: '1,2,3'
 */
export function arrayJoinString(arr: any[], delimiter = ','): string {
  try {
    return arr ? arr.join(delimiter) : ''
  } catch {
    return ''
  }
}
