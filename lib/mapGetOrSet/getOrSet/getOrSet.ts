import InputKey from '../../mapFns/InputKey'
import MapGetOrSet from '../MapGetOrSet'

const getOrSet = <Data, K, V>({
  data: { data, mapFns: { get, has, set }, getDefault }, key
}: InputKey<MapGetOrSet<Data, K, V>, K>): V => {
  if (has({ data, key })) {
    return get({ data, key }) as V
  } else {
    const value = getDefault()
    set({ data, key, value })
    return value
  }
}

export default getOrSet
