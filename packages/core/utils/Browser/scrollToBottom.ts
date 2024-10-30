/**
 * 将页面滚动至底部。
 * @returns {void}
 * @example
 * scrollToBottom();
 */
export const scrollToBottom = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop
  const d = document.documentElement.scrollHeight - window.innerHeight
  if (c < d) {
    window.requestAnimationFrame(scrollToBottom)
    window.scrollTo(0, c + c || Math.ceil(d - c) / 8)
  }
}
