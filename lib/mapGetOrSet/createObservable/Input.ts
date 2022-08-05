import Get from '../../Get'
import ObservableMap from '../../observableMap/ObservableMap'

interface Input<K, V> {
  observableMap: ObservableMap<K, V>
  getDefault: Get<V>
}

export default Input
