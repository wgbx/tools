import { randomString } from '../String/index'

/**
 * 异步下载指定URL的图片，并保存为文件
 *
 * @param {string} url 图片的URL地址
 * @param {string} [filename] 文件名，默认为随机字符串
 * @returns {Promise<void>} 下载完成后返回一个Promise，无返回值
 * @example
 * // 下载名为"my-image.jpg"的图片
 * downloadImageAsync('https://example.com/images/my-image.jpg', 'my-image.jpg')
 *   .then(() => console.log('Image downloaded successfully'))
 *   .catch((error) => console.error(error));
 */
export async function downloadImageAsync(url: string, filename = randomString()): Promise<void> {
  try {
    const response = await fetch(url)
    const blob = await response.blob()
    const imageUrl = window.URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = imageUrl
    a.download = filename

    document.body.appendChild(a)
    a.click()

    setTimeout(() => {
      document.body.removeChild(a)
      window.URL.revokeObjectURL(imageUrl)
    }, 0)
  } catch (error) {
    console.error(error)
    throw new Error('Failed to download image')
  }
}
