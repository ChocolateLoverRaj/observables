import create from '../../observableValue/create'
import getObserve from '../../observableValue/getObserve'
import set from '../../observableValue/set'
import createComputedObservable from '../createComputedObservable'

test('observable without initial get value', () => {
  const internalObservable = create(0)
  const observable = createComputedObservable(observe => observe(getObserve(internalObservable)))
  const listener = jest.fn()
  observable.addRemove.add(listener)
  set(internalObservable, 1)
  expect(listener).toBeCalledTimes(1)
})
