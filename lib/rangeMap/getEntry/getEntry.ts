import createComputedObservable from '../../computedObservable/createComputedObservable'
import getSortedInsertIndex from '../getSortedInsertIndex/getSortedInsertIndex'
import Observable from '../../Observable'
import getElement from '../../observableArray/getObservable/getElement'
import Input from './Input'
import RangeEntry from '../RangeEntry'

const getEntry = <T>({ rangeMap, index }: Input<T>): Observable<RangeEntry<T> | undefined> =>
  createComputedObservable(observe => {
    const entryIndex = observe(getSortedInsertIndex({ rangeMap, index, useStartIndex: true })) - 1
    const entry = observe(getElement({ observableArray: rangeMap, index: entryIndex }))

    if (
      entry !== undefined &&
      entry.range.start <= index &&
      index < entry.range.start + entry.range.length) {
      return entry
    }
  })

export default getEntry
