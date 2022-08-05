import Get from '../Get'
import getOrSet from './getOrSet/getOrSet'
import MapGetOrSet from './MapGetOrSet'

const testHelper = (getMapGetOrSet: Get<MapGetOrSet<any, any, any>>): void => {
  test('get', () => {
    const mapGetOrSet = getMapGetOrSet()
    mapGetOrSet.mapFns.set({ data: mapGetOrSet.data, key: 'key', value: 'value' })
    const value = getOrSet({ data: mapGetOrSet, key: 'key' })
    expect(value).toBe('value')
  })

  test('set', () => {
    const mapGetOrSet = getMapGetOrSet()
    const value = getOrSet({ data: mapGetOrSet, key: 'key' })
    expect(value).toBe(mapGetOrSet.getDefault())
    expect(mapGetOrSet.mapFns.get({ data: mapGetOrSet.data, key: 'key' })).toBe(value)
  })
}

export default testHelper
