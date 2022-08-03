import createComputedObservable from '../computedObservable/createComputedObservable'
import Observable from '../Observable'
import GapArray from './GapArray'
import getObservableArrayLength from '../observableArray/getObservable/getLength'
import getElement from '../observableArray/getObservable/getElement'
import getObserve from '../observableValue/getObserve'

const getLength = <T>(gapArray: GapArray<T>): Observable<number> =>
  createComputedObservable(observe => {
    const length = observe(getObservableArrayLength(gapArray))
    if (length === 0) return 0
    const lastPart = observe(getElement({ observableArray: gapArray, index: length - 1 }))
    return observe(getObserve(lastPart.index)) + observe(getObserve(lastPart.array)).length
  })

export default getLength
