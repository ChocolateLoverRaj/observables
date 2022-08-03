import GapArray from './GapArray'
import createObservableArray from '../observableArray/create'

const create = <T>(): GapArray<T> => createObservableArray()

export default create
