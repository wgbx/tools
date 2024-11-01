/**
 * 将字符串按照指定分隔符分割成数组
 *
 * @param {string} [strArray=''] 待分割的字符串，默认为空字符串
 * @param {string} [delimiter=','] 分隔符，默认为逗号
 * @returns {any[]} 返回分割后的数组，如果输入数据不是字符串类型，则返回空数组
 * @example
 * const str = 'apple,banana,orange';
 * const arr = splitStringToArray(str, ',');
 * // arr: ['apple', 'banana', 'orange']
 */
export function splitStringToArray(strArray?: string, delimiter = ','): any[] {
  try {
    return strArray ? strArray.split(delimiter) : []
  } catch {
    return []
  }
}
