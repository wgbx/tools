const USER_AGENT = navigator.userAgent.toLowerCase()

/**
 * 用户环境信息
 * @type {object}
 * @property {boolean} wx - 是否在微信环境中
 * @property {boolean} miniProgram - 是否在小程序环境中
 * @property {boolean} ios - 是否在 iOS 环境中
 * @property {boolean} android - 是否在 Android 环境中
 * @example
 * if (userEnvironment.wx) {
 *   console.log('当前在微信环境中');
 * }
 *
 * if (userEnvironment.miniProgram) {
 *   console.log('当前在小程序环境中');
 * }
 *
 * if (userEnvironment.ios) {
 *   console.log('当前在 iOS 环境中');
 * }
 *
 * if (userEnvironment.android) {
 *   console.log('当前在 Android 环境中');
 * }
 */
export const userEnvironment = {
  wx: USER_AGENT.includes('micromessenger'),
  miniProgram: USER_AGENT.includes('miniprogram'),
  ios: /iphone|ipad|ipod|ios/.test(USER_AGENT),
  android: /android/.test(USER_AGENT)
}
