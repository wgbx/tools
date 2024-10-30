/**
 * 格式化时间间隔
 * @param {Date} startTime - 开始时间（可选）
 * @returns {string} - 格式化后的时间间隔
 * @example
 * const passTime = formatPassTime(new Date("2023-07-16 09:00:00"));
 * console.log(passTime); // 输出: "1天前"
 */
export function formatPassTime(startTime?: Date): string {
  const currentTime = new Date()
  const startT = startTime ? new Date(startTime) : currentTime
  const timeDiff = Math.abs(currentTime.getTime() - startT.getTime())
  const timeMap = [
    { unit: '年', interval: 12 * 30 * 24 * 60 * 60 * 1000 },
    { unit: '个月', interval: 30 * 24 * 60 * 60 * 1000 },
    { unit: '天', interval: 24 * 60 * 60 * 1000 },
    { unit: '小时', interval: 60 * 60 * 1000 },
    { unit: '分钟', interval: 60 * 1000 },
    { unit: '秒', interval: 1000 },
    { unit: '', interval: 1 }
  ]

  for (const { unit, interval } of timeMap) {
    const count = Math.floor(timeDiff / interval)
    if (count >= 1) {
      return count + unit + '前'
    }
  }

  return '刚刚'
}
