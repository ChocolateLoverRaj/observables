import ObservableArray from '../ObservableArray'
import SpliceData from './SpliceData'

interface Input<T> {
  observableArray: ObservableArray<T>
  spliceData: SpliceData<T>
}

export default Input
