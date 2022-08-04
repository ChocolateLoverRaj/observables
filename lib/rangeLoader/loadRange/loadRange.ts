import createFromPromise from '../../observablePromise/createFromPromise'
import setRangeMap from '../../rangeMap/set/set'
import Input from './Input'
import setGapArray from '../../gapArray/set/set'
import setObservableValue from '../../observableValue/set'
import remove from '../../rangeMap/remove/remove'

const loadRange = <T>({ rangeLoader, range }: Input<T>): void => {
  setRangeMap({
    rangeMap: rangeLoader.loadPromises,
    rangeEntry: {
      range,
      value: createFromPromise((async () => {
        const results = await rangeLoader.loadFn(range)
        setGapArray({
          gapArray: rangeLoader.loaded,
          index: range.start,
          array: results
        })
        // Remove this load promise because it's done and it's result is already saved to gap array
        remove({ rangeMap: rangeLoader.loadPromises, range })
        if (results.length < range.length) {
          setObservableValue(rangeLoader.ended, true)

          // Delete all promises/errors out of range
          remove({
            rangeMap: rangeLoader.loadPromises,
            range: {
              start: range.start + results.length,
              length: Infinity
            }
          })
        }
      })())
    }
  })
}

export default loadRange
