import createComputedObservable from '../../computedObservable/createComputedObservable'
import Observable from '../../Observable'
import getElement from '../../observableArray/getObservable/getElement'
import getSortedInsertIndex from '../getSortedInsertIndex/getSortedInsertIndex'
import Input from './Input'
import getObserve from '../../observableValue/getObserve'

const get = <T>({ gapArray, index }: Input<T>): Observable<T | undefined> =>
  createComputedObservable(observe => {
    const partIndex = observe(getSortedInsertIndex({ gapArray, index })) - 1
    if (partIndex === -1) return

    /**
     * This part *could* have the index we're looking for
     */
    const part = observe(getElement({ observableArray: gapArray, index: partIndex }))
    /**
     * This could go out of bounds and be `undefined`. That's ok because if it's `undefined` it
     * means that there's no element at that index.
     */
    const value = observe(getObserve(part.array))[index - observe(getObserve(part.index))]
    return value
  })

export default get
