import ObservableValue from './ObservableValue'

const get = <T>({ value }: ObservableValue<T>): T => value

export default get
