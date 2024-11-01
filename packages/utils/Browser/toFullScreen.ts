/**
 * 进入全屏模式的函数。
 * @returns {void}
 * @example
 * // 示例 1: 进入全屏模式
 * toFullScreen();
 */
export function toFullScreen() {
  let element: any = document.body

  if (element.requestFullscreen) {
    element.requestFullscreen()
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen()
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen()
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen()
  }
}
