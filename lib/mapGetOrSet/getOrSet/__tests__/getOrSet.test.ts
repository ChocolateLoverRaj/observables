import createNormal from '../../createNormal/createNormal'
import getOrSet from '../getOrSet'

test('get', () => {
  const map = new Map().set('key', 'value')
  const mapGetOrSet = createNormal({ map, getDefault: () => 'default' })
  const value = getOrSet({ data: mapGetOrSet, key: 'key' })
  expect(value).toBe('value')
})

test('set', () => {
  const map = new Map()
  const mapGetOrSet = createNormal({ map, getDefault: () => 'default' })
  const value = getOrSet({ data: mapGetOrSet, key: 'key' })
  expect(value).toBe('default')
  expect(map.get('key')).toBe('default')
})
