/**
 *用于将给定的像素值（px）转换成视口相对单位（vw）
 * @function pxToVw
 * @param {number} val - 待转换的像素数值。
 * @param {number} [scale=7.5] - 可选的转换比例，默认值为7.5。这意味着当视口宽度为100vw时，相当于7.5倍的像素值
 * @returns {string} - 返回一个包含转换后结果的字符串

 * 示例：
 * ```javascript
 * console.log(pxToVw(225)); // 当scale默认为7.5时，输出："30vw"
 * ```
 */

export function pxToVw(val: number, scale = 7.5) {
  return `${(val / scale).toFixed(5)}vw`
}
