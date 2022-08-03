import createComputedObservable from '../computedObservable/createComputedObservable'
import Observable from '../Observable'
import getLength from '../observableArray/getObservable/getLength'
import getElement from '../observableArray/getObservable/getElement'
import RangeMap from './RangeMap'

const getRangeMax = (rangeMap: RangeMap<any>): Observable<number | undefined> =>
  createComputedObservable(observe => {
    const length = observe(getLength(rangeMap))
    const lastEntry = observe(getElement({ observableArray: rangeMap, index: length - 1 }))
    return lastEntry !== undefined
      ? lastEntry.range.start + lastEntry.range.length
      : undefined
  })

export default getRangeMax
