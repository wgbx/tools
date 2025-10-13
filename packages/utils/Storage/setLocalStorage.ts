import { isSupport } from '../Type/index'

/**
 * 将数据存储在localStorage中，如果浏览器支持的话
 * @param {string} key - 存储数据使用的键
 * @param {string} data - 要存储的数据
 * @param {number} expiredTime - 数据过期时间（秒）
 * @example
 * setLocalStorage("userInfo", JSON.stringify({name: "John"}), 3600); // 将用户信息存储1小时
 */
export function setLocalStorage(key: string, data: string, expiredTime: number) {
  if (isSupport('localStorage')) {
    const expired = new Date().getTime() + expiredTime * 1000
    localStorage.setItem(key, JSON.stringify({ data, expired }))
  }
}
