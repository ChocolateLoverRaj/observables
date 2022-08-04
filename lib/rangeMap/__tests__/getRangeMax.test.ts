import create from '../create'
import getRangeMax from '../getRangeMax'
import set from '../set/set'

test('observable', () => {
  const rangeMap = create<any>()
  const observable = getRangeMax(rangeMap)
  expect(observable.getValue()).toBe(undefined)
  const listener = jest.fn()
  observable.addRemove.add(listener)
  set({
    rangeMap,
    rangeEntry: {
      range: {
        start: 0,
        length: 1
      },
      value: 'some value'
    }
  })
  expect(listener).toBeCalledTimes(1)
  expect(observable.getValue()).toBe(1)
})
