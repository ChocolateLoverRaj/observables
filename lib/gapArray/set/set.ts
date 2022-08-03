import getElement from '../../observableArray/getElement/getElement'
import splice from '../../observableArray/splice/splice'
import getObservableValue from '../../observableValue/get'
import getSortedInsertIndex from '../getSortedInsertIndex/getSortedInsertIndex'
import Input from './Input'
import setObservableValue from '../../observableValue/set'
import create from '../../observableValue/create'

// FIXME: Something does work with this
const set = <T>({ gapArray, array, index }: Input<T>): void => {
  // Do nothing if empty array
  if (array.length === 0) return

  const insertIndex = getSortedInsertIndex({ gapArray, index })
    .getValue()
  const partBefore = getElement({ observableArray: gapArray, index: insertIndex - 1 })
  const partAfter = getElement({ observableArray: gapArray, index: insertIndex })
  // Merge with part before, if possible
  const mergeWithBefore = partBefore !== undefined &&
    getObservableValue(partBefore.index) + getObservableValue(partBefore.array).length === index
  const mergeWithAfter = partAfter !== undefined &&
    index + array.length === getObservableValue(partAfter.index)
  if (mergeWithBefore) {
    const partBeforeArray = getObservableValue(partBefore.array)
    setObservableValue(
      partBefore.array,
      mergeWithAfter
        ? partBeforeArray.concat(array, getObservableValue(partAfter.array))
        : partBeforeArray.concat(array))
  } else {
    if (mergeWithAfter) {
      setObservableValue(partAfter.array, array.concat(getObservableValue(partAfter.array)))
      setObservableValue(partAfter.index, index)
    } else {
      splice({
        observableArray: gapArray,
        spliceData: {
          start: insertIndex,
          deleteCount: 0,
          insert: [{
            array: create(array),
            index: create(index)
          }]
        }
      })
    }
  }
}

export default set
