import create from '../../create'
import set from '../../set/set'
import get from '../get'

test('observable', () => {
  const observableMap = create<any, any>()
  const observable = get({ observableMap, key: 'key' })
  const listener = jest.fn()
  observable.addRemove.add(listener)
  expect(observable.getValue()).toBeUndefined()
  set({
    observableMap,
    setData: { key: 'key', value: 'value' }
  })
  expect(listener).toBeCalled()
  expect(observable.getValue()).toBe('value')
})
