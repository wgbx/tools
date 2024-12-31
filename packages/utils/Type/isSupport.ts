/**
 * 检查当前浏览器是否支持指定的API
 * @param {string} api - 要检查的API名称
 * @param {boolean} [error=true] - 是否在不支持API时输出错误信息
 * @returns {boolean} 如果浏览器支持该API，则返回true，否则返回false
 * @example
 * console.log(isSupport("localStorage")); // 输出 true 或 false
 * console.log(isSupport("localStorage", false)); // 输出 true 或 false，不输出错误信息
 */
export function isSupport(api: string, error = true): boolean {
  if (!(api in window)) {
    error && console.error(`${api} is not supported by this browser.`)
    return false
  }
  return true
}
