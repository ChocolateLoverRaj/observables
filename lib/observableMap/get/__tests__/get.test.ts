import create from '../../create'
import set from '../../set/set'
import get from '../get'

test('not existing key', () => {
  const observableMap = create<any, any>()
  const value = get({ observableMap, key: 'not existing key' })
  expect(value).toBeUndefined()
})

test('existing key', () => {
  const observableMap = create<any, any>()
  set({
    observableMap,
    setData: { key: 'existing key', value: 'value' }
  })
  const value = get({ observableMap, key: 'existing key' })
  expect(value).toBe('value')
})
