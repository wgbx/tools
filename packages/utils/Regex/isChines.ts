export const isChines = (str: string): boolean => {
  const reg = /^[\u4E00-\u9FA5]+$/
  return reg.test(str)
}
