/**
 * 动态加载指定 URL 的 JavaScript 文件
 * @param {string} src - 要加载的脚本的URL。
 * @param {boolean} [async=false] - 指定脚本是否异步加载，默认为同步加载。
 * @returns {Promise<void>} - 在脚本加载完成后解析的Promise。
 * @example
 * // 同步加载脚本
 * loadScriptAsync('https://example.com/script.js')
 *   .then(() => {
 *     console.log('脚本加载完成');
 *   })
 *   .catch((error) => {
 *     console.error('脚本加载失败: ', error);
 *   });
 * // 异步加载脚本
 * loadScriptAsync('https://example.com/script.js', true)
 *   .then(() => {
 *     console.log('脚本加载完成');
 *   })
 *   .catch((error) => {
 *     console.error('脚本加载失败: ', error);
 *   });
 */
export function loadScriptAsync(src: string, async = false): Promise<void> {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = src
    script.async = async

    script.onload = () => {
      setTimeout(() => {
        resolve()
      }, 500)
    }
    script.onerror = reject

    document.body.appendChild(script)
  })
}
