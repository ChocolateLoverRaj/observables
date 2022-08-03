import createComputedObservable from '../../computedObservable/createComputedObservable'
import customGetSortedInsertIndex from '../../getSortedInsertIndex/getSortedInsertIndex'
import Observable from '../../Observable'
import getElement from '../../observableArray/getObservable/getElement'
import getLength from '../../observableArray/getLength'
import Input from './Input'

const getSortedInsertIndex = <T>(
  { rangeMap, index, useStartIndex }: Input<T>
): Observable<number> =>
    createComputedObservable(observe =>
      customGetSortedInsertIndex({
        length: getLength(rangeMap),
        getNumberAtIndex: index => {
          const { range } = observe(getElement({ observableArray: rangeMap, index }))
          return useStartIndex
            ? range.start
            : range.start + range.length
        },
        number: index
      }))

export default getSortedInsertIndex
