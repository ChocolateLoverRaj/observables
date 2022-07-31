import emit from '../emit/emit'
import ObservableValue from './ObservableValue'

const set = <T>(observableValue: ObservableValue<T>, newValue: T): void => {
  observableValue.value = newValue
  emit<[]>({
    forEach: (callback) => observableValue.listeners.forEach(callback),
    inputs: []
  })
}

export default set
