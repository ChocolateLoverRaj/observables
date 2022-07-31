import ChangeEventAdd from './ChangeEventAdd'
import ChangeEventRemove from './ChangeEventRemove'
import ChangeEventClear from './ChangeEventClear'

type ChangeEvent<T> =
  | ChangeEventAdd<T>
  | ChangeEventRemove<T>
  | ChangeEventClear

export default ChangeEvent
