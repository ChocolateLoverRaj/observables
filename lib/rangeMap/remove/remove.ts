import getLength from '../../observableArray/getLength'
import getElement from '../../observableArray/getElement/getElement'
import splice from '../../observableArray/splice/splice'
import getSortedInsertIndex from '../getSortedInsertIndex/getSortedInsertIndex'
import Input from './Input'

const getPartialOverlapError = (): Error =>
  new Error('Partial overlap of entry and range is not currently supported')

/**
 * Remove an entry with the given range. Currently throw error if range partially matches index
 * existing entry.
 */
const remove = <T>({ rangeMap, range }: Input<T>): void => {
  // Nothing to delete in empty range map
  if (getLength(rangeMap) === 0) return

  let startIndex = Math.max(
    getSortedInsertIndex({ rangeMap, index: range.start, useStartIndex: true })
      .getValue() - 1, 0)
  const endIndex = Math.max(getSortedInsertIndex({
    rangeMap,
    index: range.start + range.length,
    useStartIndex: false
  }).getValue() - 1, 0)

  const startEntry = getElement({ observableArray: rangeMap, index: startIndex })
  if (startEntry.range.start < range.start) {
    if (startEntry.range.start + startEntry.range.length <= range.start) {
      startIndex++
    } else {
      // Partial overlap of entry and range. Not currently supported.
      throw getPartialOverlapError()
    }
  }

  const endEntry = getElement({ observableArray: rangeMap, index: endIndex })
  if (endEntry.range.start + endEntry.range.length > range.start + range.length) {
    throw getPartialOverlapError()
  }

  // Remove the entries that are in the inputted range
  splice({
    observableArray: rangeMap,
    spliceData: {
      start: startIndex,
      deleteCount: endIndex - startIndex + 1,
      insert: []
    }
  })
}

export default remove
