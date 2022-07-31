import Input from './Input'

type AddOrRemove<Data, Value> = (input: Input<Data, Value>) => void

export default AddOrRemove
