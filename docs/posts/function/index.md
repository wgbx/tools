---
title: Function
---

# Function

## addQuery

🎯向给定的 URL 中添加查询参数

```typescript
/**
 * @func addQuery
 * @desc 向给定的URL中添加查询参数
 * @param {object} addQueryObj - 查询参数对象
 * @param {string} [url=location.href] - 目标URL，默认为当前页面的URL
 * @returns {string} - 添加查询参数后的URL
 * @example
 * // 示例1：添加单个查询参数
 * const newUrl = addQuery({ id: 1 });
 * console.log(newUrl); // 输出：https://example.com/?id=1
 *
 * // 示例2：添加多个查询参数
 * const newUrl = addQuery({ id: 1, page: 2 });
 * console.log(newUrl); // 输出：https://example.com/?id=1&page=2
 *
 * // 示例3：指定目标URL
 * const newUrl = addQuery({ name: 'Alice' }, 'https://example.com/products');
 * console.log(newUrl); // 输出：https://example.com/products?name=Alice
 */
```

## addVConsoleScript

🎯添加 vconsole 脚本并初始化 VConsole 对象，用于移动端调试

```typescript
/**
 * @func addVConsoleScript
 * @desc 添加vconsole脚本并初始化VConsole对象，用于移动端调试
 * @example
 * addVConsoleScript();
 * // 向页面添加VConsole脚本，当脚本加载完成后会自动创建VConsole实例
 */
```

## arrayJoinString

🎯将数组连接成字符串

```typescript
/**
 * @func arrayJoinString
 * @desc 将数组连接成字符串
 * @param {any[]} arr 待连接的数组
 * @param {string} [delimiter=','] 分隔符，默认为逗号
 * @returns {string} 返回由数组元素组成的字符串，使用指定的分隔符分隔
 * @example
 * const arr = [1, 2, 3];
 * const str = arrayJoinString(arr, ',');
 * // str: '1,2,3'
 */
```

## compareVersion

🎯比较两个版本号的大小

```typescript
/**
 * @func compareVersion
 * @desc 比较两个版本号的大小
 * @param {string} v1 版本号1
 * @param {string} v2 版本号2
 * @returns {number} 返回值为0表示版本相等，为1表示v1大于v2，为-1表示v1小于v2
 * @example
 * const version1 = '1.2.3';
 * const version2 = '1.2.4';
 * const result = compareVersion(version1, v2);
 * console.log(result);
 * // 输出: -1
```

## fileExtension

🎯获取文件名中的扩展名，如果没有找到扩展名，则返回空字符串

```typescript
/**
 * @func getFileExtension
 * @desc 获取文件名中的扩展名
 * @param filename - 要获取扩展名的文件名
 * @returns {string} 文件名中的扩展名
 * @example
 * const filename = 'example.txt';
 * const extension = getFileExtension(filename);
 * console.log(extension);
 * // 输出：'txt'
 */
```

## fileImageSizeAsync

🎯获取图片文件的宽度和高度信息

```typescript
/**
 * @func getFileImageSizeAsync
 * @desc 获取图片文件的宽度和高度信息
 * @param {File} file - 要获取信息的图片文件
 * @returns {Promise<{width: number, height: number}>} 图片文件的宽度和高度信息
 *  @example
 * const fileInput = document.getElementById('file-input');
 * const file = fileInput.files[0];
 * getFileImageSizeAsync(file)
 *  .then(size => {
 *     console.log(size.width, size.height);
 *     // 输出图片的宽度和高度
 *   })
 *  .catch(error => {
 *     console.error(error);
 *     // 处理错误情况
 *   });
 */
```

## getImageSizeAsync

🎯异步获取图片尺寸。

```typescript
/**
 * @func getImageSizeAsync
 * @desc 异步获取图片尺寸。
 * @param {string} url - 图片地址。
 * @returns {Promise<{ width: number; height: number }>} 返回Promise，包含图片的宽度和高度信息
 * @example
 * const imageUrl = 'https://example.com/image.jpg';
 * getImageSizeAsync(imageUrl)
 *  .then(size => {
 *     console.log(size.width, size.height);
 *     // 输出图片的-width和-height
 *   })
 *  .catch(error => {
 *     console.error(error);
 *     // 处理错误情况
 *   });
 */
```

## getQuery

🎯获取 URL 中的查询参数

```typescript
/**
 * @func getQuery
 * @desc 获取URL中的查询参数
 * @param url 指定URL路径，默认为当前页面的URL地址
 * @returns 返回包含URL中查询参数的键值对的对象
 * @example
 * const url = 'https://example.com/?name=John&age=30';
 * const query = getQuery(url);
 * console.log(query);
 * // 输出：{ name: "John", age: "30" }
 */
```

## getUserEnvironment

🎯获取用户环境信息

```typescript
/**
 * @const getUserEnvironment
 * @desc 获取用户环境信息
 * @returns {Object} 返回一个对象，包含以下字段：
    wx {boolean} 是否在微信中
    miniProgram {boolean} 是否在小程序中
    ios {boolean} 是否在 iOS系统中
    android {boolean} 是否在 Android系统中
 * @example
  const env = getUserEnvironment();
  if (env.wx) {
    console.log('在微信中');
  }
  if (env.miniProgram) {
    console.log('在小程序中');
  }
  if (env.ios) {
    console.log('在 iOS系统中');
  }
  if (env.android) {
    console.log('在 Android系统中');
  }
  */
```

## getTypeOf

🎯获取参数的类型

```typescript
/**
 * @func getTypeOf
 * @desc 获取参数的类型
 * @param {unknown} param - 要获取类型的参数
 * @returns {string} - 参数的类型，可能的值有：'undefined'、'null'、'boolean'、'number'、'bigint'、'string'、'symbol'、'function'、'array'、'object'、'date'、'regexp'、'map'、'set'、'weakmap'、'weakset'、'error'、'promise'、'int8array'、'uint8array'、'uint8clampedarray'、'int16array'、'uint16array'、'int32array'、'uint32array'、'float32array'、'float64array'、'arraybuffer'、'sharedarraybuffer'、'dataView'、'generatorfunction'、'asyncfunction'、'generatorobject'、'asyncgeneratorobject'、'proxy'、'webassembly'
 * @example
 * getTypeOf(42); // 'number'
 * getTypeOf('hello'); // 'string'
 * getTypeOf([1, 2, 3]); // 'array'
 */
```

## loadScriptAsync

🎯动态加载指定 URL 的 JavaScript 文件

```typescript
/**
 * @func loadScriptAsync
 * @desc 动态加载指定URL的JavaScript文件
 * @param {string} src - 要加载的脚本的URL。
 * @param {boolean} [async=false] - 指定脚本是否异步加载，默认为同步加载。
 * @returns {Promise<void>} - 在脚本加载完成后解析的Promise。
 * @example
 * // 同步加载脚本
 * loadScriptAsync('https://example.com/script.js')
 *  .then(() => {
 *     console.log('脚本加载完成');
 *   })
 *  .catch((error) => {
 *     console.error('脚本加载失败: ', error);
 *   });
 * // 异步加载脚本
 * loadScriptAsync('https://example.com/script.js', true)
 *  .then(() => {
 *     console.log('脚本加载完成');
 *   })
 *  .catch((error) = {
 *     console.error('脚本加载失败: ', error);
 *   });
 */
```

## mergeTargeObj

🎯合并目标对象和源对象，并返回合并后的结果

```typescript
/**
 * @func mergeTargeObj
 * @desc 合并目标对象和源对象，并返回合并后的结果
 * @param {T} targetObj - 目标对象
 * @param {object} sourceObj - 源对象
 * @returns {T} 合并后的对象
 * @example
 * // 示例测试
 * const targetObj = {
 *   a: 1,
 *   b: [2, 3, 4],
 *   c: 7,
 *   d: 10
 * };
 *
 * const sourceObj = {
 *   b: [5, 6],
 *   c: undefined,
 *   d: 998
 * };
 *
 * const mergedObj = mergeTargetObj(targetObj, sourceObj);
 * // 输出结果: { a: 1, b: [5, 6], c: 7,d: 998}
 */
```

## parseJSONToArray

🎯将 JSON 字符串解析为数组

```typescript
/**
 * @func parseJSONToArray
 * @desc 将JSON字符串解析为数组
 * @param {string} strArray - 要解析的JSON字符串。
 * @returns {any[]} - 解析后的数组。如果解析失败或输入为空字符串，则返回空数组 []。
 * @example
 *
 * // 返回数组 [1, 2, 3]
 * const arr1 = parseJSONToArray('[1, 2, 3]');
 *
 * // 返回空数组 []
 * const arr2 = parseJSONToArray('');
 *
 * // 返回空数组 []
 * const arr3 = parseJSONToArray('invalid JSON');
 */
```

## parseJSONToObject

🎯将 JSON 字符串解析为对象

```typescript
/**
 * @func parseJSONToObject
 * @desc 将JSON字符串解析为对象
 * @param {string} strObject - 要解析的JSON字符串。
 * @returns {void}
 * @example
 * // 解析一个有效的JSON字符串
 * const jsonString = '{"name": "Alice", "age": 30}';
 * const parsedObject = parseJSONToObject(jsonString);
 * console.log(parsedObject); // { name: 'Alice', age: 30 }
 *
 * // 解析一个无效的JSON字符串
 * const invalidJsonString = '{name: "Bob"}';
 * const parsedObject2 = parseJSONToObject(invalidJsonString);
 * console.log(parsedObject2); // {}
 */
```

## preLoadImageAsync

🎯从指定的 URL 加载图片，并返回一个 Promise，Promise 完成会返回一个 HTMLImageElement

```typescript
/**
 * @func preLoadImageAsync
 * @desc从指定的URL加载图片，并返回一个Promise，Promise完成会返回一个HTMLImageElement
 * @param {string} imageUrl - 要加载的图片的URL
 * @returns {Promise<HTMLImageElement>} 一个Promise，Promise完成后会返回加载的图片
 * @example
 * const imageUrl = 'https://example.com/image.jpg';
 * preLoadImageAsync(imageUrl)
 *  .then(image => {
 *     console.log(image);
 *     // 在控制台打印加载完成的图片元素
 *     // 可以将其添加到DOM中或进行其他操作
 *   })
 *  .catch(() => {
 *     console.error('图片加载失败');
 *     // 处理加载失败的情况
 *   });
 */
```

## preLoadImagesAsync

🎯从指定的 URL 加载图片数组，并返回一个 PromiseAll，PromiseAll 完成会返回一个 HTMLImageElement 数组

```typescript
/**
 * @func preLoadImagesAsync
 * @desc从指定的URL加载图片数组，并返回一个PromiseAll，PromiseAll完成会返回一个HTMLImageElement数组
 * @param imageUrls - 图片URL数组。
 * @returns Promise对象，当所有图片都加载成功后，Promise完成并返回HTMLImageElement数组。
 * @example
 * const imageUrls = [
 *   'https://example.com/image1.jpg',
 *   '  'https://example.com/image2.jpg',
 *   'https://example.com/image3.jpg'
 * ];
 * preLoadImagesAsync(imageUrls)
 *  .then(images => {
 *     console.log(images);
 *     // 在控制台打印加载完成的图片元素数组
 *     // 可以将其添加到DOM中或进行其他操作
 *   })
 *  .catch(() => {
 *     console.error('图片加载失败');
 *     // 处理加载失败的情况
 *   });
 */
```

## pxToVw

🎯用于将给定的像素值（px）转换成视口相对单位（vw）

```typescript
/**
 * @func pxToVw
 * @desc 用于将给定的像素值（px）转换成视口相对单位（vw）
 * @param {number} val - 待转换的像素数值。
 * @param {number} [scale=7.5] - 可选的转换比例，默认值为7.5。这意味着当视口宽度为100vw时，相当于7.5倍的像素值
 * @returns {string} - 返回一个包含转换后结果的字符串
 * @example
 * ```javascript
 * console.log(pxToVw(225)); // 当scale默认为7.5时，输出："30vw"
 */
 ```

## removeQuery

🎯从 URL 中删除指定的查询参数

```typescript
/**
 * @func removeQuery
 * @desc 获取URL中的查询参数
 * @param {string[] | string} keysToDelete - 要删除的查询参数的键。可以是一个键的数组或单个键的字符串。
 * @param {string} [path=location.href] - 要从中删除查询参数的URL。默认为当前页面的URL。
 * @returns {string} 删除了指定查询参数后的URL。
 *
 * @example
 * const modifiedURL = removeQuery(['key1', 'key2'], 'https://www.example.com/page?param1=value1&param2=value2');
 * // 返回: "https://www.example.com/page?param1=value1"
 *
 * @example
 * const modifiedURL = removeQuery('key', 'https://www.example.com/page?param=value');
 * // 返回: "https://www.example.com/page"
 *
 * @throws {Error} 如果 `keysToDelete` 参数既不是数组也不是字符串时抛出错误。
 */
```

## splitStringToArray

🎯将字符串按照指定分隔符分割成数组

```typescript
/**
 * @func splitStringToArray
 * @desc 将字符串按照指定分隔符分割成数组
 * @param {string} [strArray=''] 待分割的字符串，默认为空字符串
 * @param {curl} [delimiter=','] 分隔符，默认为逗号
 * @returns {any[]} 返回分割后的数组，如果输入数据不是字符串类型，则返回空数组
 *
 * @example
 * const str = 'apple,banana,orange';
 * const arr = splitStringToArray(str, ',');
 * // arr: ['apple', '香蕉', 'orange']
 */
```
