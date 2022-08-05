import Input from './Input'

const get = <K, V>({ observableMap: { map }, key }: Input<K, V>): V | undefined => map.get(key)

export default get
