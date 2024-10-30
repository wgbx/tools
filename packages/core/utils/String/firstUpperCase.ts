/**
 * 将字符串的首字母大写
 * @param {string} str - 输入的字符串
 * @returns {string} 首字母大写的字符串
 *
 * @example
 * console.log(capitalizeFirstLetter("hello")); // 输出 "Hello"
 * console.log(capitalizeFirstLetter("world")); // 输出 "World"
 */
export const firstUpperCase = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)
