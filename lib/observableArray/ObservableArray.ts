import Listener from '../Listener'
import Event from './Event'

interface ObservableArray<T> {
  listeners: Set<Listener<[Event<T>]>>
  array: T[]
}

export default ObservableArray
