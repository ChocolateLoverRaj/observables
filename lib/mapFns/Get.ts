import InputKey from './InputKey'

type Get<Data, K, V> = (input: InputKey<Data, K>) => V

export default Get
