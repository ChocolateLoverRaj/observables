import MapGetOrSet from '../MapGetOrSet'
import Input from './Input'
import has from '../../observableMap/has'
import get from '../../observableMap/get/get'
import set from '../../observableMap/set/set'
import ObservableMap from '../../observableMap/ObservableMap'

const createObservable = <K, V>(
  { observableMap, getDefault }: Input<K, V>
): MapGetOrSet<ObservableMap<K, V>, K, V> => ({
    data: observableMap,
    mapFns: { get, has, set },
    getDefault
  })

export default createObservable
