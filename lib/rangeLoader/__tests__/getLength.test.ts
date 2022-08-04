import create from '../create'
import getLength from '../getLength'
import loadRange from '../loadRange/loadRange'

test('includes promises in length', () => {
  const rangeLoader = create(async () => await new Promise(() => {}))
  const observable = getLength(rangeLoader)
  expect(observable.getValue()).toBe(0)
  const fn = jest.fn()
  observable.addRemove.add(fn)
  loadRange({
    rangeLoader,
    range: {
      start: 0,
      length: 1
    }
  })
  expect(fn).toBeCalled()
  expect(observable.getValue()).toBe(1)
})
