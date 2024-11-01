/**
 * 退出全屏模式的函数。
 * @returns {void}
 * @example
 * // 示例：退出全屏模式
 * exitFullScreen();
 */
export function exitFullScreen() {
  const { exitFullscreen, msExitFullscreen, mozCancelFullScreen, webkitExitFullscreen } = document as any
  if (exitFullscreen) {
    exitFullscreen()
  } else if (msExitFullscreen) {
    msExitFullscreen()
  } else if (mozCancelFullScreen) {
    mozCancelFullScreen()
  } else if (webkitExitFullscreen) {
    webkitExitFullscreen()
  }
}
