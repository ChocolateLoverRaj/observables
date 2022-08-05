import emit from '../../emit/emit'
import InputKeyValue from '../../mapFns/InputKeyValue'
import Event from '../Event'
import EventType from '../EventType'
import ObservableMap from '../ObservableMap'

const set = <K, V>(
  { data: { map, listeners }, key, value }: InputKeyValue<ObservableMap<K, V>, K, V>
): void => {
  map.set(key, value)
  const event: Event<K, V> = {
    type: EventType.SET,
    data: { key, value }
  }
  emit({
    forEach: Set.prototype.forEach.bind(listeners),
    inputs: [event]
  })
}

export default set
