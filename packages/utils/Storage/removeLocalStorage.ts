/**
 * 从localStorage中删除指定的数据
 * @param {string} key - 要删除的数据的键
 * @example
 * removeLocalStorage("userInfo"); // 删除存储的用户信息
 */
export function removeLocalStorage(key: string) {
  localStorage.removeItem(key)
}
