import ObservableArray from './ObservableArray'

const getLength = <T>({ array }: ObservableArray<T>): number => array.length

export default getLength
