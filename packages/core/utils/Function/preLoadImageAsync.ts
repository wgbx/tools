
/**
 * 从指定的URL加载图片，并返回一个Promise，Promise完成会返回一个HTMLImageElement。
 * @param {string} imageUrl - 要加载的图片的URL
 * @returns {Promise<HTMLImageElement>} 一个Promise，Promise完成后会返回加载的图片
 * @example
 * const imageUrl = 'https://example.com/image.jpg';
 * preLoadImageAsync(imageUrl)
 *   .then(image => {
 *     console.log(image);
 *     // 在控制台打印加载完成的图片元素
 *     // 可以将其添加到 DOM 中或进行其他操作
 *   })
 *   .catch(() => {
 *     console.error('图片加载失败');
 *     // 处理加载失败的情况
 *   });
 */
export async function preLoadImageAsync(imageUrl: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      resolve(img)
      URL.revokeObjectURL(img.src)
    }
    img.onerror = () => reject()
    img.src = imageUrl
  })
}