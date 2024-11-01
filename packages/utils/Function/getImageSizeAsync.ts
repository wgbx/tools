/**
 * @description 异步获取图片尺寸。
 * @param {string} url - 图片地址。
 * @returns {Promise<{ width: number; height: number }>} 返回 Promise，包含图片的宽度和高度信息。
 * @example
 * const imageUrl = 'https://example.com/image.jpg';
 * getImageSizeAsync(imageUrl)
 *   .then(size => {
 *     console.log(size.width, size.height);
 *     // 输出图片的宽度和高度
 *   })
 *   .catch(error => {
 *     console.error(error);
 *     // 处理错误情况
 *   });
 */
export function getImageSizeAsync(url: string): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    let image: HTMLImageElement | null = new Image()
    image.src = url
    image.onload = () => {
      if (image) {
        const { naturalWidth: width, naturalHeight: height } = image
        image = null
        resolve({ width, height })
      }
    }
    image.onerror = err => {
      image = null
      reject(err)
    }
  })
}