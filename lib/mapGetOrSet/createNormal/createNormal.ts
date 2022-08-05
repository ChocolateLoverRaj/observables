import MapGetOrSet from '../MapGetOrSet'
import Input from './Input'
import has from '../../mapFns/normal/has'
import get from '../../mapFns/normal/get'
import set from '../../mapFns/normal/set'

const createNormal = <K, V>({ map, getDefault }: Input<K, V>): MapGetOrSet<Map<K, V>, K, V> => ({
  data: map,
  mapFns: { get, has, set },
  getDefault
})

export default createNormal
