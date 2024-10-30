import { getQuery } from './getQuery'

/**
 * 从URL中删除指定的查询参数。
 * @param {string[] | string} keysToDelete - 要删除的查询参数的键。可以是一个键的数组或单个键的字符串。
 * @param {string} [url=location.href] - 要从中删除查询参数的URL。默认为当前页面的URL。
 * @returns {string} 删除了指定查询参数后的URL。
 *
 * @example
 * const modifiedURL = removeQuery(['key1', 'key2'], 'https://www.example.com/page?param1=value1&param2=value2');
 * // 返回: "https://www.example.com/page?param1=value1"
 *
 * @example
 * const modifiedURL = removeQuery('key', 'https://www.example.com/page?param=value');
 * // 返回: "https://www.example.com/page"
 *
 * @throws {Error} 如果 `keysToDelete` 参数既不是数组也不是字符串时抛出错误。
 */
export const removeQuery = (keysToDelete: string[] | string = [], url: string = location.href): string => {
  if (!Array.isArray(keysToDelete) && typeof keysToDelete !== 'string') {
    throw new Error('keysToDelete 参数必须是数组或字符串')
  }

  if (typeof keysToDelete === 'string') {
    keysToDelete = [keysToDelete]
  }

  let query = ''
  const queryObj = getQuery(url)

  keysToDelete.forEach(key => {
    delete queryObj[key]
  })

  Object.keys(queryObj).forEach(item => {
    query += `&${item}=${queryObj[item]}`
  })
  return `${url.split('?')[0]}${query.replace('&', '?')}`
}
