// @ts-nocheck
import { mergeTargeObj } from '../packages/index'

describe('mergeTargetObj', () => {
  test('合并对象属性', () => {
    const targetObj = {
      a: 1,
      b: [2, 3, 4]
    }

    const sourceObj = {
      a: 5,
      b: [5, 6],
      c: [7, 8, 9]
    }

    const mergedObj = mergeTargeObj(targetObj, sourceObj)

    expect(mergedObj).toEqual({
      a: 5,
      b: [5, 6]
    })
  })

  test('合并对象属性空数组', () => {
    const targetObj = {
      a: 1,
      b: [2, 3, 4]
    }

    const sourceObj = {
      a: 5,
      b: [],
      c: [7, 8, 9]
    }

    const mergedObj = mergeTargeObj(targetObj, sourceObj)

    expect(mergedObj).toEqual({
      a: 5,
      b: []
    })
  })

  test('合并对象属性空数组', () => {
    const targetObj = {
      a: 1,
      b: [{ a: 1 }, { b: 2 }],
      c: {
        a: [{ a: 1 }, { b: 2 }],
        b: [{ a: 1 }, { b: 2 }]
      }
    }

    const sourceObj = {
      a: 5,
      b: [{ a: 3 }, { b: 4 }],
      c: {
        a: [{ a: 3 }, { b: 4 }],
        b: null
      }
    }

    const mergedObj = mergeTargeObj(targetObj, sourceObj)

    expect(mergedObj).toEqual({
      a: 5,
      b: [{ a: 3 }, { b: 4 }],
      c: {
        a: [{ a: 3 }, { b: 4 }],
        b: [{ a: 1 }, { b: 2 }]
      }
    })
  })

  test('合并对象属性空数组', () => {
    const targetObj = {
      a: 1,
      b: [{ a: 1 }, { b: 2 }],
      c: {
        a: [{ a: 1 }, { b: 2 }],
        b: [{ a: 1 }, { b: 2 }]
      },
      d: [1, 2, 3]
    }

    const sourceObj = {
      a: 5,
      b: [{ a: 3 }, { b: 4 }],
      c: {
        a: [{ a: 3 }, { b: 4 }],
        b: null
      },
      d: 5
    }

    const mergedObj = mergeTargeObj(targetObj, sourceObj)

    expect(mergedObj).toEqual({
      a: 5,
      b: [{ a: 3 }, { b: 4 }],
      c: {
        a: [{ a: 3 }, { b: 4 }],
        b: [{ a: 1 }, { b: 2 }]
      },
      d: 5
    })
  })

  test('合并对象属性空数组', () => {
    const targetObj = {
      a: 1,
      b: [{ a: 1 }, { b: 2 }],
      c: {
        a: [{ a: 1 }, { b: 2 }],
        b: [{ a: 1 }, { b: 2 }]
      },
      d: null
    }

    const sourceObj = {
      a: 5,
      b: [{ a: 3 }, { b: 4 }],
      c: {
        a: [{ a: 3 }, { b: 4 }],
        b: null
      },
      d: 5
    }

    const mergedObj = mergeTargeObj(targetObj, sourceObj)

    expect(mergedObj).toEqual({
      a: 5,
      b: [{ a: 3 }, { b: 4 }],
      c: {
        a: [{ a: 3 }, { b: 4 }],
        b: [{ a: 1 }, { b: 2 }]
      },
      d: 5
    })
  })

  test('合并对象属性空数组', () => {
    const targetObj = {
      a: 1,
      b: [{ a: 1 }, { b: 2 }],
      c: {
        a: [{ a: 1 }, { b: 2 }],
        b: [{ a: 1 }, { b: 2 }]
      },
      d: 5
    }

    const sourceObj = {
      a: 5,
      b: [{ a: 3 }, { b: 4 }],
      c: {
        a: [{ a: 3 }, { b: 4 }],
        b: null
      },
      d: [1, 2, 3]
    }

    const mergedObj = mergeTargeObj(targetObj, sourceObj)

    expect(mergedObj).toEqual({
      a: 5,
      b: [{ a: 3 }, { b: 4 }],
      c: {
        a: [{ a: 3 }, { b: 4 }],
        b: [{ a: 1 }, { b: 2 }]
      },
      d: [1, 2, 3]
    })
  })

  test('源对象为空', () => {
    const targetObj = {
      a: 1,
      b: [2, 3, 4]
    }

    const sourceObj = {}

    const mergedObj = mergeTargeObj(targetObj, sourceObj)

    expect(mergedObj).toEqual({
      a: 1,
      b: [2, 3, 4]
    })
  })

  test('目标对象为空', () => {
    const targetObj = {}

    const sourceObj = {
      a: 1,
      b: [2, 3, 4]
    }

    const mergedObj = mergeTargeObj(targetObj, sourceObj)

    expect(mergedObj).toEqual({})
  })

  test('源对象为数组', () => {
    const targetObj = {
      a: 1,
      b: [2, 3, 4],
      c: { d: '8', e: 100 },
      d: true
    }

    const sourceObj = {
      a: undefined,
      b: [5, 6],
      c: { d: '9', e: 700, f: 989 },
      d: null
    }

    const mergedObj = mergeTargeObj(targetObj, sourceObj)

    expect(mergedObj).toEqual({
      a: 1,
      b: [5, 6],
      c: { d: '9', e: 700 },
      d: true
    })
  })

  test('目标对象和源对象都为空', () => {
    const targetObj = {}
    const sourceObj = {}

    const mergedObj = mergeTargeObj(targetObj, sourceObj)

    expect(mergedObj).toEqual({})
  })

  test('源对象为多种数据类型', () => {
    const targetObj = {
      a: 1,
      b: [2, 3, 4],
      c: { d: '8', e: 100 },
      d: true,
      e: null,
      f: 'false',
      g: [
        {
          a: 1,
          b: 2
        }
      ]
    }

    const sourceObj = {
      a: undefined,
      b: [5, 6],
      c: { d: '9', e: 700, f: 989 },
      d: null,
      e: undefined,
      f: 0,
      g: [
        {
          a: 3,
          b: 4,
          c: 5
        }
      ]
    }

    const mergedObj = mergeTargeObj(targetObj, sourceObj)

    expect(mergedObj).toEqual({
      a: 1,
      b: [5, 6],
      c: { d: '9', e: 700 },
      d: true,
      e: null,
      f: 0,
      g: [
        {
          a: 3,
          b: 4,
          c: 5
        }
      ]
    })
  })
})
