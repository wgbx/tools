/**
 * 将一个对象转换为查询字符串。
 *
 * @param {Record<string, string>} obj - 需要转换为URL查询参数的对象，其中键和值均为字符串
 * @returns {string} - 格式化后的查询字符串，若转换过程中出现异常，则返回空字符串
 * @example
 * ```javascript
 * const params = { name: 'John Doe', age: '30' };
 * const queryString = objectToQueryString(params);
 * console.log(queryString); // 输出："name=John%20Doe&age=30"
 *
 * const queryString = objectToQueryString('');
 * console.log(queryString); // 输出：""
 * ```
 */
export const objectToQueryString = (obj: Record<string, string>): string => {
  try {
    return Object.entries(obj)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&')
  } catch {
    return ''
  }
}
