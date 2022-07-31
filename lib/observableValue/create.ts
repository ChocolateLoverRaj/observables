import ObservableValue from './ObservableValue'
import Listener from '../Listener'

const create = <T>(initialValue: T): ObservableValue<T> => {
  const listeners = new Set<Listener<[]>>()
  const observableValue: ObservableValue<T> = {
    listeners,
    observable: {
      addRemove: {
        add: (value) => listeners.add(value),
        remove: (value) => listeners.delete(value)
      },
      getValue: () => observableValue.value
    },
    value: initialValue
  }
  return observableValue
}

export default create
