import ObservableSet from './ObservableSet'
import emit from '../emit/emit'
import InputValue from '../setFns/InputValue'
import ChangeEvent from './ChangeEvent'
import ChangeEventType from './ChangeEventType'
import Remove from '../setFns/Remove'

const remove: Remove<any, any> = <T>({
  data: {
    data: { set, listeners },
    setFns: { remove }
  },
  value
}: InputValue<ObservableSet<T, any>, T>): void => {
  remove({ data: set, value })
  emit<[ChangeEvent<T>]>({
    forEach: (callback) => listeners.forEach(callback),
    inputs: [
      {
        type: ChangeEventType.REMOVE,
        value
      }
    ]
  })
}

export default remove
