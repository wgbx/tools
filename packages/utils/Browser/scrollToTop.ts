/**
 * 滚动到页面顶部。
 * @returns {void}
 * @example
 * scrollToTop();
 */
export const scrollToTop = () => {
  const c = document?.documentElement?.scrollTop ?? document?.body?.scrollTop
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop)
    window.scrollTo(0, c - c / 8)
  }
}
