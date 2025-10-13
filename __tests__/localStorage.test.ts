import { setLocalStorage, getLocalStorage, removeLocalStorage } from '../packages/index'

describe('localStorage', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  describe('setLocalStorage', () => {
    it('should store data in localStorage with expiry time', () => {
      setLocalStorage('testKey', 'testValue', 3600)
      const stored = JSON.parse(localStorage.getItem('testKey') || '{}')
      expect(stored.data).toBe('testValue')
      expect(stored.expired).toBeGreaterThan(new Date().getTime())
    })
  })

  describe('getLocalStorage', () => {
    it('should return stored data if not expired', () => {
      setLocalStorage('testKey', 'testValue', 3600)
      const result = getLocalStorage('testKey')
      expect(result).toBe('testValue')
    })

    it('should return null if key does not exist', () => {
      const result = getLocalStorage('nonExistent')
      expect(result).toBeNull()
    })

    it('should return null and remove data if expired', () => {
      setLocalStorage('testKey', 'testValue', -1)
      const result = getLocalStorage('testKey')
      expect(result).toBeNull()
      expect(localStorage.getItem('testKey')).toBeNull()
    })
  })

  describe('removeLocalStorage', () => {
    it('should remove data from localStorage', () => {
      setLocalStorage('testKey', 'testValue', 3600)
      removeLocalStorage('testKey')
      expect(localStorage.getItem('testKey')).toBeNull()
    })
  })
})
