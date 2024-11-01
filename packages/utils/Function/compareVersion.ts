
/**
 * 比较两个版本号的大小
 * @param {string} v1 版本号1
 * @param {string} v2 版本号2
 * @returns {number} 返回值为 0 表示版本相等，为 1 表示 v1 大于 v2，为 -1 表示 v1 小于 v2
 * @example
 * const version1 = '1.2.3';
 * const version2 = '1.2.4';
 * const result = compareVersion(version1, version2);
 * console.log(result);
 * // 输出: -1
 */
export function compareVersion(v1: string, v2: string): 0 | 1 | -1 {
  const parseV1 = v1.split('.').map(Number)
  const parseV2 = v2.split('.').map(Number)

  const minLen = Math.min(parseV1.length, parseV2.length)

  for (let i = 0; i < minLen; i++) {
    if (parseV1[i] !== parseV2[i]) {
      return parseV1[i] < parseV2[i] ? -1 : 1
    }
  }

  return 0
}
