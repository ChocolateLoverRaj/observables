import InputKey from '../InputKey'

const get = <K, V>({ data, key }: InputKey<Map<K, V>, K>): V | undefined => data.get(key)

export default get
