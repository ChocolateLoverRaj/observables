import ObservableSet from './ObservableSet'
import emit from '../emit/emit'
import Add from '../setFns/Add'
import InputValue from '../setFns/InputValue'
import ChangeEvent from './ChangeEvent'
import ChangeEventType from './ChangeEventType'

const add: Add<any, any> = <T>({
  data: {
    data: { set, listeners },
    setFns: { add }
  },
  value
}: InputValue<ObservableSet<T, any>, T>): void => {
  add({ data: set, value })
  emit<[ChangeEvent<T>]>({
    forEach: (callback) => listeners.forEach(callback),
    inputs: [
      {
        type: ChangeEventType.ADD,
        value
      }
    ]
  })
}

export default add
