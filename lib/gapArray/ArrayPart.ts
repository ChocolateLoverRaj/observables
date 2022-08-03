import ObservableValue from '../observableValue/ObservableValue'

interface ArrayPart<T> {
  index: ObservableValue<number>
  array: ObservableValue<readonly T[]>
}

export default ArrayPart
