import InputKey from '../InputKey'

const has = <K, V>({ data, key }: InputKey<Map<K, V>, K>): boolean => data.has(key)

export default has
