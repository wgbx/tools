/**
 * 检查当前用户是否在移动设备上浏览
 * @function isMobile
 * @returns {boolean} 如果是移动设备返回 `true`，否则返回 `false`
 * @example
 * console.log(isMobile())
 * // 输出：true 或 false
 */
export function isMobile(): boolean {
  if (navigator.userAgent.match(/(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i)) {
    return true
  }
  return false
}
