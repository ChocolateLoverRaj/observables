import Observable from '../../Observable'
import create from '../../observableValue/create'
import getObserve from '../../observableValue/getObserve'
import set from '../../observableValue/set'
import Compute from '../Compute'
import createComputedObservable from '../createComputedObservable'

test('observable without initial get value', () => {
  const internalObservable = create('initial')
  const computedObservable = createComputedObservable(observe =>
    observe(getObserve(internalObservable)))
  let latestValue: any
  const listener = jest.fn(() => {
    latestValue = computedObservable.getValue()
  })
  computedObservable.addRemove.add(listener)
  expect(computedObservable.getValue()).toBe('initial')
  expect(listener).toBeCalledTimes(0)
  set(internalObservable, 'updated')
  expect(listener).toBeCalledTimes(1)
  expect(latestValue).toBe('updated')
})

test("getValue() is read-only doesn't re-observe observables", () => {
  const internalObservable: Observable<unknown> = {
    getValue: jest.fn(),
    addRemove: { add: jest.fn(), remove: jest.fn() }
  }
  const compute: Compute<unknown> = observe => observe(internalObservable)
  const mockFn = jest.fn(compute)
  const computedObservable = createComputedObservable(mockFn)
  expect(internalObservable.addRemove.add).toBeCalledTimes(0)
  expect(internalObservable.addRemove.remove).toBeCalledTimes(0)

  computedObservable.getValue()
  expect(internalObservable.addRemove.add).toBeCalledTimes(0)
  expect(internalObservable.addRemove.remove).toBeCalledTimes(0)
})
