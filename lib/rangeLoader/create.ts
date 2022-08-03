import LoadFn from './LoadFn'
import RangeLoader from './RangeLoader'
import createRangeMap from '../rangeMap/create'
import createMapArray from '../gapArray/create'
import createObservableValue from '../observableValue/create'

const create = <T>(loadFn: LoadFn<T>): RangeLoader<T> => {
  return {
    loadFn,
    ended: createObservableValue(false),
    loadPromises: createRangeMap(),
    loaded: createMapArray()
  }
}

export default create
