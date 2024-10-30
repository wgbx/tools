import { getImageSizeAsync } from "./getImageSizeAsync"

/**
 * 获取图片文件的宽度和高度信息
 * @param {File} file - 要获取信息的图片文件
 * @returns {Promise<{width: number, height: number}>} 图片文件的宽度和高度信息
 *  @example
 * const fileInput = document.getElementById('file-input');
 * const file = fileInput.files[0];
 * getFileImageSizeAsync(file)
 *   .then(size => {
 *     console.log(size.width, size.height);
 *     // 输出图片的宽度和高度
 *   })
 *   .catch(error => {
 *     console.error(error);
 *     // 处理错误情况
 *   });
 */
export async function getFileImageSizeAsync(file) {
  if (!(file instanceof File)) {
    return Promise.reject(new TypeError('参数应为 File 类型'))
  }

  const src = URL.createObjectURL(file)

  try {
    const { width, height } = await getImageSizeAsync(src)
    return { width, height }
  } catch (error) {
    return Promise.reject(error)
  } finally {
    URL.revokeObjectURL(src)
  }
}