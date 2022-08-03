import GapArray from '../gapArray/GapArray'
import ObservablePromise from '../observablePromise/ObservablePromise'
import ObservableValue from '../observableValue/ObservableValue'
import RangeMap from '../rangeMap/RangeMap'
import LoadFn from './LoadFn'

interface RangeLoader<T> {
  ended: ObservableValue<boolean>
  /**
   * Has promises that are pending and errors
   */
  loadPromises: RangeMap<ObservablePromise<void>>
  loadFn: LoadFn<T>
  loaded: GapArray<T>
}

export default RangeLoader
