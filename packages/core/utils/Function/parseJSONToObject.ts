interface anyObject {
  [key: string]: any
}
/**
 * 将 JSON 字符串解析为对象。
 * @param {string} strObject - 要解析的 JSON 字符串。
 * @returns {Object} - 解析后的对象。如果解析失败，则返回空对象。
 * @example
 * // 解析一个有效的 JSON 字符串
 * const jsonString = '{"name": "Alice", "age": 30}';
 * const parsedObject = parseJSONToObject(jsonString);
 * console.log(parsedObject); // { name: 'Alice', age: 30 }
 *
 * // 解析一个无效的 JSON 字符串
 * const invalidJsonString = '{name: "Bob"}';
 * const parsedObject2 = parseJSONToObject(invalidJsonString);
 * console.log(parsedObject2); // {}
 */
export function parseJSONToObject(strObject?: string): anyObject {
  try {
    return strObject ? JSON.parse(strObject) : {}
  } catch {
    return {}
  }
}
