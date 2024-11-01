import { getQuery } from './getQuery'

/**
 * AddQuery函数用于在URL中添加查询参数。
 * @param {object} addQueryObj - 查询参数对象
 * @param {string} [url=location.href] - 目标URL，默认为当前页面的URL
 * @returns {string} - 添加查询参数后的URL
 * @example
 * // 示例1：添加单个查询参数
 * const newUrl = addQuery({ id: 1 });
 * console.log(newUrl); // 输出：https://example.com/?id=1
 *
 * // 示例2：添加多个查询参数
 * const newUrl = addQuery({ id: 1, page: 2 });
 * console.log(newUrl); // 输出：https://example.com/?id=1&page=2
 *
 * // 示例3：指定目标URL
 * const newUrl = addQuery({ name: 'Alice' }, 'https://example.com/products');
 * console.log(newUrl); // 输出：https://example.com/products?name=Alice
 */
export const addQuery = (addQueryObj: object, url = location.href) => {
  const queryObj = { ...getQuery(url), ...addQueryObj }
  let query = ''
  Object.keys(queryObj).forEach(key => {
    const value = queryObj[key]
    if (![null, undefined, ''].includes(value)) {
      query += `&${key}=${value}`
    }
  })

  return `${url.split('?')[0]}${query.replace('&', '?')}`
}
