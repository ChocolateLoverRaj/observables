import ChangeEventType from './ChangeEventType'

interface ChangeEventRemove<T> {
  type: ChangeEventType.REMOVE
  value: T
}

export default ChangeEventRemove
