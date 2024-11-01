/**
 * 获取文件名中的扩展名。如果没有找到扩展名，则返回空字符串。
 * @param {string} filename - 要获取扩展名的文件名。
 * @returns {string} 文件名中的扩展名
 * @example
 * const filename = 'example.txt';
 * const extension = getFileExtension(filename);
 * console.log(extension);
 * // 输出：'txt'
 */
export function getFileExtension(filename: string) {
  return filename.split('.').pop()?.toLowerCase() ?? ''
}
