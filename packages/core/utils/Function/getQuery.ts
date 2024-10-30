import { isEncoded } from '../Regex/isEncoded'

/**
 * 获取 URL 中的查询参数
 * @param url 指定 URL 路径，默认为当前页面的 URL 地址
 * @returns 返回包含 URL 中查询参数的键值对的对象
 * @example
 * const url = 'https://example.com/?name=John&age=30';
 * const query = getQuery(url);
 * console.log(query);
 * // 输出：{ name: "John", age: "30" }
 */
export function getQuery(url = location.href) {
  let queryObj: { [key: string]: string } = {}
  new URL(url).searchParams.forEach((item, key) => {
    queryObj[key] = isEncoded(item) && url.includes(`${key}=${item}`) ? item : encodeURIComponent(item)
  })
  return queryObj
}
