import ObservableMap from '../ObservableMap'

interface Input<K, V> {
  observableMap: ObservableMap<K, V>
  key: K
}

export default Input
