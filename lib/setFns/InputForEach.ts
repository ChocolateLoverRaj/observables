import ForEachCallback from '../forEach/ForEachCallback'

interface InputForEach<Data, T> {
  data: Data
  callback: ForEachCallback<T>
}

export default InputForEach
