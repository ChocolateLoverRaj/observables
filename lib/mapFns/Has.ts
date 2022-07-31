import InputKey from './InputKey'

type Has<Data, K> = (input: InputKey<Data, K>) => boolean

export default Has
