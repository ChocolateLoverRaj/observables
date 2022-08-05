import InputKeyValue from '../InputKeyValue'

const set = <K, V>({ data, key, value }: InputKeyValue<Map<K, V>, K, V>): void => {
  data.set(key, value)
}

export default set
