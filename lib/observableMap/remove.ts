import emit from '../emit/emit'
import InputKey from '../mapFns/InputKey'
import Event from './Event'
import EventType from './EventType'
import ObservableMap from './ObservableMap'

const remove = <K, V>(
  { data: { map, listeners }, key }: InputKey<ObservableMap<K, V>, K>
): void => {
  map.delete(key)
  const event: Event<K, V> = {
    type: EventType.REMOVE,
    data: key
  }
  emit({
    forEach: Set.prototype.forEach.bind(listeners),
    inputs: [event]
  })
}

export default remove
