import getSortedInsertIndex from '../getSortedInsertIndex/getSortedInsertIndex'
import getElement from '../../observableArray/getElement/getElement'
import splice from '../../observableArray/splice/splice'
import Input from './Input'
import isBetweenExclude from '../../isBetween/isBetweenExclude'

const set = <T>({ rangeMap, rangeEntry }: Input<T>): void => {
  const { range } = rangeEntry
  const insertIndex = getSortedInsertIndex({
    rangeMap,
    index: rangeEntry.range.start,
    useStartIndex: true
  }).getValue()

  // Do not let two ranges overlap
  let startIndex: number
  let deleteCount: number
  {
    const entryBefore = getElement({ observableArray: rangeMap, index: insertIndex - 1 })
    if (entryBefore !== undefined) {
      const rangeBefore = entryBefore.range
      if (isBetweenExclude({
        start: range.start,
        end: range.start + range.length,
        numberToCheck: rangeBefore.start + rangeBefore.length
      })) {
        throw new Error('Entry range partial overlap with entry before')
      }
      startIndex = rangeBefore.start === range.start && rangeBefore.length === range.length
        ? insertIndex - 1
        : insertIndex
    } else {
      startIndex = insertIndex
    }
  }
  {
    const endIndex = getSortedInsertIndex({
      rangeMap,
      index: rangeEntry.range.start + rangeEntry.range.length,
      useStartIndex: false
    }).getValue() - 1
    const entryAfter = getElement({
      observableArray: rangeMap,
      index: endIndex
    })
    if (entryAfter !== undefined) {
      const rangeAfter = entryAfter.range
      if (isBetweenExclude({
        start: range.start,
        end: range.start + range.length,
        numberToCheck: rangeAfter.start
      })) {
        throw new Error('Entry range partial overlap with entry after')
      }
      deleteCount = rangeAfter.start === range.start && rangeAfter.length === range.length
        ? endIndex - startIndex + 1
        : endIndex - startIndex
    } else {
      deleteCount = 0
    }
  }
  splice({
    observableArray: rangeMap,
    spliceData: {
      start: startIndex,
      deleteCount,
      insert: [rangeEntry]
    }
  })
}

export default set
