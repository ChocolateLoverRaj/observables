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
  const startIndex = getSortedInsertIndex({ rangeMap, index: range.start, useStartIndex: true })
    .getValue() - 1
  const endIndex = getSortedInsertIndex({
    rangeMap,
    index: range.start + range.length,
    useStartIndex: false
  }).getValue() - 1

  const startEntry = getElement({ observableArray: rangeMap, index: startIndex })
  if (startEntry === undefined) {
    // Nothing to do. No entry in range to remove
    return
  }
  if (startEntry.range.start !== range.start) {
    // Partial overlap of entry and range. Not currently supported.
    throw getPartialOverlapError()
  }

  const endEntry = getElement({ observableArray: rangeMap, index: endIndex })
  if (endEntry === undefined) {
    // This should never happen. Probably a bug if it does happen
    throw new Error("No end entry found! This shouldn't happen!")
  }
  if (endEntry.range.start + endEntry.range.length !== range.start + range.length) {
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
