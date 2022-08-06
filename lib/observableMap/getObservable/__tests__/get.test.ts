import create from '../../create'
import remove from '../../remove'
import set from '../../set/set'
import get from '../get'

test('emit on set', () => {
  const observableMap = create<any, any>()
  const observable = get({ data: observableMap, key: 'key' })
  const listener = jest.fn()
  observable.addRemove.add(listener)
  expect(observable.getValue()).toBeUndefined()
  set({
    data: observableMap,
    key: 'key',
    value: 'value'
  })
  expect(listener).toBeCalled()
  expect(observable.getValue()).toBe('value')
})

test('emit on remove', () => {
  const observableMap = create<any, any>()
  set({
    data: observableMap,
    key: 'key',
    value: 'value'
  })
  const observable = get({ data: observableMap, key: 'key' })
  const listener = jest.fn()
  observable.addRemove.add(listener)
  expect(observable.getValue()).toBe('value')
  remove({
    data: observableMap,
    key: 'key'
  })
  expect(listener).toBeCalled()
  expect(observable.getValue()).toBeUndefined()
})
