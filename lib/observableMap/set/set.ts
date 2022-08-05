import emit from '../../emit/emit'
import Event from '../Event'
import EventType from '../EventType'
import Input from './Input'

const set = <K, V>({ observableMap, setData }: Input<K, V>): void => {
  observableMap.map.set(setData.key, setData.value)
  const event: Event<K, V> = {
    type: EventType.SET,
    data: setData
  }
  emit({
    forEach: Set.prototype.forEach.bind(observableMap.listeners),
    inputs: [event]
  })
}

export default set
