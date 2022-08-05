import InputKey from '../mapFns/InputKey'
import ObservableMap from './ObservableMap'

const has = <K, V>({ data: { map }, key }: InputKey<ObservableMap<K, V>, K>): boolean =>
  map.has(key)

export default has
