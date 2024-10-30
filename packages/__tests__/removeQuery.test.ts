// @ts-nocheck
import { removeQuery } from '../core/utils/Tools'

describe('getQuery', () => {
  it('基础移除', () => {
    const url = 'https://vas-emp.wgbx51.cn/mall/microPage?id=4396&channelCode=WX202013231523&siteId=SITE_8494713615671234&code=78944'
    const result = removeQuery('code', url)
    expect(result).toEqual('https://vas-emp.wgbx51.cn/mall/microPage?id=4396&channelCode=WX202013231523&siteId=SITE_8494713615671234')
  })
  it('空移除', () => {
    const url = 'https://vas-emp.wgbx51.cn/mall/microPage?id=4396&channelCode=WX202013231523&siteId=SITE_8494713615671234&code=78944'
    const result = removeQuery([], url)
    expect(result).toEqual(url)
  })
  it('中文移除', () => {
    const url =
      'https://vas-emp.wgbx51.cn/mall/microPage?id=4396&channelCode=WX202013231523&siteId=SITE_8494713615671234&name=飞天敦煌&code=78944'
    const result = removeQuery('name', url)
    expect(result).toEqual(
      'https://vas-emp.wgbx51.cn/mall/microPage?id=4396&channelCode=WX202013231523&siteId=SITE_8494713615671234&code=78944'
    )
  })
  it('中文移除', () => {
    const url =
      'https://vas-emp.wgbx51.cn/mall/microPage?id=4396&channelCode=WX202013231523&siteId=SITE_8494713615671234&name=飞天敦煌&code=78944'
    const result = removeQuery('code', url)
    expect(result).toEqual(
      'https://vas-emp.wgbx51.cn/mall/microPage?id=4396&channelCode=WX202013231523&siteId=SITE_8494713615671234&name=飞天敦煌'
    )
  })
  it('中文转义移除', () => {
    const url =
      'https://vas-emp.wgbx51.cn/mall/microPage?id=4396&channelCode=WX202013231523&siteId=SITE_8494713615671234&name=%E9%A3%9E%E5%A4%A9%E6%95%A6%E7%85%8C&code=78944'
    const result = removeQuery('code', url)
    expect(result).toEqual(
      'https://vas-emp.wgbx51.cn/mall/microPage?id=4396&channelCode=WX202013231523&siteId=SITE_8494713615671234&name=%E9%A3%9E%E5%A4%A9%E6%95%A6%E7%85%8C'
    )
  })
})
