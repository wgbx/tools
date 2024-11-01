/**
 * 将字符串转换为 camel case 格式
 *
 * @param {string} str - 需要转换的字符串
 * @returns {string} - 转换后的 camel case 格式字符串
 * @example
 * const camelCaseStr = getCamelCase("hello-world");
 * console.log(camelCaseStr); // 输出: "helloWorld"
 */
export function getCamelCase(str: string) {
  return str.replace(/-([a-z])/g, (i, item) => item.toUpperCase())
}
