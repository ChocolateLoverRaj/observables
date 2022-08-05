import InputKey from './InputKey'

type Get<Data, K, V> = (input: InputKey<Data, K>) => V | undefined

export default Get
