import Get from '../../Get'

interface Input<K, V> {
  map: Map<K, V>
  getDefault: Get<V>
}

export default Input
