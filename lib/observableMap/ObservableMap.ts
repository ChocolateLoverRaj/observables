import Listener from '../Listener'
import Event from './Event'

interface ObservableMap<K, V> {
  map: Map<K, V>
  listeners: Set<Listener<[Event<K, V>]>>
}

export default ObservableMap
