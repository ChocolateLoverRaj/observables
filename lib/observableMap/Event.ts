import EventType from './EventType'
import SetData from './SetData'

interface Events<K, V> {
  [EventType.SET]: SetData<K, V>
  [EventType.REMOVE]: K
}

type Event<K, V> = {
  [Type in keyof Events<K, V>]: {
    type: Type
    data: Events<K, V>[Type]
  }
}[keyof Events<K, V>]

export default Event
