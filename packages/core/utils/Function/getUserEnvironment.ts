/**
获取用户环境信息
@returns {Object} 返回一个对象，包含以下字段：
wx {boolean} 是否在微信中
miniProgram {boolean} 是否在小程序中
ios {boolean} 是否在 iOS 系统中
android {boolean} 是否在 Android 系统中
@example
const env = getUserEnvironment();
if (env.wx) {
console.log('在微信中');
}
if (env.miniProgram) {
console.log('在小程序中');
}
if (env.ios) {
console.log('在 iOS 系统中');
}
if (env.android) {
console.log('在 Android 系统中');
} */
export function getUserEnvironment(){
  const USER_AGENT = navigator.userAgent.toLowerCase()
  return{
    wx: USER_AGENT.includes('micromessenger'),
    miniProgram: USER_AGENT.includes('miniprogram'),
    ios: /iphone|ipad|ipod|ios/.test(USER_AGENT),
    android: /android/.test(USER_AGENT)
  }
}
