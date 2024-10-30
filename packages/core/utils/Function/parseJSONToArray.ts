/**
 * 将 JSON 字符串解析为数组。
 * @param {string} strArray - 要解析的 JSON 字符串。
 * @returns {any[]} - 解析后的数组。如果解析失败或输入为空字符串，则返回空数组 []。
 * @example
 *
 * // 返回数组 [1, 2, 3]
 * const arr1 = parseJSONToArray('[1, 2, 3]');
 *
 * // 返回空数组 []
 * const arr2 = parseJSONToArray('');
 *
 * // 返回空数组 []
 * const arr3 = parseJSONToArray('invalid JSON');
 */
export function parseJSONToArray(strArray?: string): any[] {
  try {
    return strArray ? JSON.parse(strArray) : []
  } catch {
    return []
  }
}
