import { preLoadImageAsync } from "./preLoadImageAsync";

/**
 * 从指定的URL加载图片数组，并返回一个PromiseAll，PromiseAll完成会返回一个HTMLImageElement数组。
 * @param imageUrls - 图片 URL 数组。
 * @returns Promise 对象，当所有图片都加载成功后，Promise 完成并返回 HTMLImageElement 数组。
 * @example
 * const imageUrls = [
 *   'https://example.com/image1.jpg',
 *   'https://example.com/image2.jpg',
 *   'https://example.com/image3.jpg'
 * ];
 * preLoadImagesAsync(imageUrls)
 *   .then(images => {
 *     console.log(images);
 *     // 在控制台打印加载完成的图片元素数组
 *     // 可以将其添加到 DOM 中或进行其他操作
 *   })
 *   .catch(() => {
 *     console.error('图片加载失败');
 *     // 处理加载失败的情况
 *   });
 */
export async function preLoadImagesAsync(imageUrls: string[]): Promise<HTMLImageElement[]> {
  return Promise.all(imageUrls.map(url => preLoadImageAsync(url)))
}