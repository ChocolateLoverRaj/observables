import createComputedObservable from '../computedObservable/createComputedObservable'
import Observable from '../Observable'
import RangeLoader from './RangeLoader'
import getGapArrayLength from '../gapArray/getLength'
import getRangeMax from '../rangeMap/getRangeMax'

const getLength = <T>({ loaded, loadPromises }: RangeLoader<T>): Observable<number> =>
  createComputedObservable(observe => {
    return Math.max(
      observe(getGapArrayLength(loaded)),
      observe(getRangeMax(loadPromises)) ?? 0)
  })

export default getLength
