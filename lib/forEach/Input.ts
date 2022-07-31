import ForEachCallback from './ForEachCallback'

interface Input<Data, Value> {
  data: Data
  callback: ForEachCallback<Value>
}

export default Input
