/**
 * 自定义合并函数，将源对象的属性值合并到目标对象中。
 *
 * @template T
 * @param {T} targetVal - 目标对象
 * @param {*} sourceVal - 源对象
 * @returns {T} 合并后的对象
 *
 * @example
 * // 示例测试
 * const target = {
 *   a: 1,
 *   b: [2, 3, 4],
 * };
 *
 * const source = {
 *   a: 2
 *   b: [5, 6],
 *   c: [7, 8, 9],
 * };
 *
 * const merged = customize(target, source);
 * // 输出结果: { a: 2, b: [5, 6]}
 */
function customize(targeVal, sourceVal) {
  if (sourceVal === null || typeof sourceVal === 'undefined') {
    return targeVal
  }
  if (Array.isArray(targeVal) && Array.isArray(sourceVal)) {
    return sourceVal
  }
  if (typeof targeVal === 'object' && typeof sourceVal === 'object') {
    return mergeTargeObj(targeVal, sourceVal)
  }
  return sourceVal
}

/**
 * 合并目标对象和源对象，并返回合并后的结果。
 *
 * @template T
 * @param {T} targetObj - 目标对象
 * @param {object} sourceObj - 源对象
 * @returns {T} 合并后的对象
 *
 * @example
 * // 示例测试
 * const targetObj = {
 *   a: 1,
 *   b: [2, 3, 4],
 *   c: 7,
 *   d: 10
 * };
 *
 * const sourceObj = {
 *   b: [5, 6],
 *   c: undefined,
 *   d: 998
 * };
 *
 * const mergedObj = mergeTargetObj(targetObj, sourceObj);
 * // 输出结果: { a: 1, b: [5, 6], c: 7 ,d: 998}
 */
export function mergeTargeObj<T extends object>(targeObj: T, sourceObj: T): T {
  const mergedObj = {} as T

  for (let key in targeObj) {
    mergedObj[key] = customize(targeObj[key], sourceObj[key])
  }

  return mergedObj
}
