import InputValue from './InputValue'

type Has<Data, T> = (input: InputValue<Data, T>) => boolean

export default Has
