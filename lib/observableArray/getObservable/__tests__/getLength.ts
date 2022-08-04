import create from '../../create'
import splice from '../../splice/splice'
import getLength from '../getLength'

test('observable', () => {
  const observableArray = create<any>()
  const observable = getLength(observableArray)
  expect(observable.getValue()).toBe(0)
  const listener = jest.fn()
  observable.addRemove.add(listener)
  splice({
    observableArray,
    spliceData: {
      start: 0,
      deleteCount: 0,
      insert: ['some value']
    }
  })
  expect(listener).toBeCalledTimes(1)
  expect(observable.getValue()).toBe(1)
})
