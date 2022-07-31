import Add from '../setFns/Add'
import SetRemove from '../setFns/Remove'
import SetHas from '../setFns/Has'
import ChangeEvent from './ChangeEvent'
import Listener from '../Listener'
import ForEach from '../setFns/ForEach'

interface ObservableSet<T, SetData> {
  data: {
    set: SetData
    listeners: Set<Listener<[ChangeEvent<T>]>>
  }
  setFns: {
    add: Add<SetData, T>
    remove: SetRemove<SetData, T>
    has: SetHas<SetData, T>
    forEach: ForEach<SetData, T>
  }
}

export default ObservableSet
