import ChangeEventType from './ChangeEventType'

interface ChangeEventAdd<T> {
  type: ChangeEventType.ADD
  value: T
}

export default ChangeEventAdd
