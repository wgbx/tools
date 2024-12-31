import { isSupport } from '../Type/index'
import { removeLocalStorage } from './removeLocalStorage'

/**
 * 从localStorage中获取存储的数据，如果数据已过期，则删除该数据
 * @param {string} key - 要获取的数据的键
 * @returns {any} 返回存储的数据，如果数据不存在或已过期则返回null
 * @example
 * console.log(getLocalStorage("userInfo")); // 输出存储的用户信息或null
 */
export function getLocalStorage(key: string) {
  if (isSupport('localStorage')) {
    const data = JSON.parse(localStorage.getItem(key) ?? '{}')
    if (data.expiredTime > new Date().getTime()) {
      return data.data
    }
    removeLocalStorage(key)
    return null
  }
}
