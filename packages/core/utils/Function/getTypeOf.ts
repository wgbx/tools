/**
 * 获取参数的类型
 * @param {unknown} param - 要获取类型的参数
 * @returns {string} - 参数的类型，可能的值有：'undefined'、'null'、'boolean'、'number'、'bigint'、'string'、'symbol'、'function'、'array'、'object'、'date'、'regexp'、'map'、'set'、'weakmap'、'weakset'、'error'、'promise'、'int8array'、'uint8array'、'uint8clampedarray'、'int16array'、'uint16array'、'int32array'、'uint32array'、'float32array'、'float64array'、'arraybuffer'、'sharedarraybuffer'、'dataView'、'generatorfunction'、'asyncfunction'、'generatorobject'、'asyncgeneratorobject'、'proxy'、'webassembly'
 * @example
 * getTypeOf(42); // 'number'
 * getTypeOf('hello'); // 'string'
 * getTypeOf([1, 2, 3]); // 'array'
 */
export const getTypeOf = (param: unknown): string => {
  return Object.prototype.toString.call(param).slice(8, -1).toLowerCase()
}
