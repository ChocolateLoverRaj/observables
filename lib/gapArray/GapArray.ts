import ObservableArray from '../observableArray/ObservableArray'
import ArrayPart from './ArrayPart'

type GapArray<T> = ObservableArray<ArrayPart<T>>

export default GapArray
