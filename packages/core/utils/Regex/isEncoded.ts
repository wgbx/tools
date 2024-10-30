export function isEncoded(str) {
  try {
    return encodeURIComponent(str) !== str
  } catch (e) {
    return false
  }
}
