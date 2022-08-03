import EventType from './EventType'
import SpliceData from './splice/SpliceData'

interface Events<T> {
  [EventType.SPLICE]: SpliceData<T>
}

export default Events
