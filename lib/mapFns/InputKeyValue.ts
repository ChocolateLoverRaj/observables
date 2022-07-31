import InputKey from './InputKey'

interface InputKeyValue<Data, Key, Value> extends InputKey<Data, Key> {
  value: Value
}

export default InputKeyValue
