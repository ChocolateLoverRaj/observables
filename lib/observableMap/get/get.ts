import InputKey from '../../mapFns/InputKey'
import ObservableMap from '../ObservableMap'

const get = <K, V>({ data: { map }, key }: InputKey<ObservableMap<K, V>, K>): V | undefined =>
  map.get(key)

export default get
