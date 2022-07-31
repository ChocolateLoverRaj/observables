import Listener from '../Listener'
import Observable from '../Observable'

interface ObservableValue<T> {
  listeners: Set<Listener<[]>>
  observable: Observable<T>
  value: T
}

export default ObservableValue
