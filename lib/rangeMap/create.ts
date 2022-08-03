import RangeMap from './RangeMap'
import createObservableArray from '../observableArray/create'

const create = <T>(): RangeMap<T> => createObservableArray()

export default create
