import ObservableMap from '../ObservableMap'
import SetData from '../SetData'

interface Input<K, V> {
  observableMap: ObservableMap<K, V>
  setData: SetData<K, V>
}

export default Input
