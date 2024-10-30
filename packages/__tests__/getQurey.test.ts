// @ts-nocheck
import { getQuery } from '../core/utils/Tools'

describe('getQuery', () => {
  it('should return an object with query parameters', () => {
    const url = 'http://example.com/?name=John&age=30'
    const result = getQuery(url)
    expect(result).toEqual({ name: 'John', age: '30' })
  })

  it('should handle URL without query parameters', () => {
    const url = 'http://example.com/'
    const result = getQuery(url)
    expect(result).toEqual({})
  })

  it('should handle URL with duplicate keys', () => {
    const url = 'http://example.com/?name=John&name=Doe'
    const result = getQuery(url)
    expect(result).toEqual({ name: 'Doe' })
  })

  it('should handle URL with special characters', () => {
    const url = 'http://example.com/?name=John%20Doe&age=30%2B'
    const result = getQuery(url)
    expect(result).toEqual({ name: 'John%20Doe', age: '30%2B' })
  })

  it('should handle URL with special characters', () => {
    const url = 'http://example.com/?name=John Doe&age=30+'
    const result = getQuery(url)
    expect(result).toEqual({ name: 'John Doe', age: '30+' })
  })
})
