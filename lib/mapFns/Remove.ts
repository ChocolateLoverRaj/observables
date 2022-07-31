import InputKey from './InputKey'

type Remove<Data, K> = (input: InputKey<Data, K>) => void

export default Remove
