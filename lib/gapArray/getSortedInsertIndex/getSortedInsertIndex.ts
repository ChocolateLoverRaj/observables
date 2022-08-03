import createComputedObservable from '../../computedObservable/createComputedObservable'
import customGetSortedInsertIndex from '../../getSortedInsertIndex/getSortedInsertIndex'
import Observable from '../../Observable'
import getElement from '../../observableArray/getObservable/getElement'
import getLength from '../../observableArray/getLength'
import Input from './Input'
import getObserve from '../../observableValue/getObserve'

const getSortedInsertIndex = <T>({ gapArray, index }: Input<T>): Observable<number> =>
  createComputedObservable(observe =>
    customGetSortedInsertIndex({
      length: getLength(gapArray),
      getNumberAtIndex: index =>
        observe(getObserve(observe(getElement({ observableArray: gapArray, index })).index)),
      number: index
    }))

export default getSortedInsertIndex
