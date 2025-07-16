export function isEncoded(str) {
  try {
    return encodeURIComponent(str) !== str
  } catch {
    return false
  }
}
