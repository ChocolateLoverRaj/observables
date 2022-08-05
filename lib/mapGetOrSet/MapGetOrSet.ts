import Get from '../mapFns/Get'
import Set from '../mapFns/Set'
import GetValue from '../Get'
import Has from '../mapFns/Has'

interface MapGetOrSet<Data, K, V> {
  data: Data
  mapFns: {
    get: Get<Data, K, V>
    set: Set<Data, K, V>
    has: Has<Data, K>
  }
  getDefault: GetValue<V>
}

export default MapGetOrSet
