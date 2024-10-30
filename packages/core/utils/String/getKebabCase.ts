/**
 * 将字符串转换为 kebab case 格式
 *
 * @param {string} str - 需要转换的字符串
 * @returns {string} - 转换后的 kebab case 格式字符串
 * @example
 * const kebabCaseStr = getKebabCase("HelloWorld");
 * console.log(kebabCaseStr); // 输出: "hello-world"
 */
export function getKebabCase(str) {
  return str.replace(/[A-Z]/g, item => '-' + item.toLowerCase())
}
