import Input from './Input'

const getElement = <T>({ observableArray: { array }, index }: Input<T>): T => array[index]

export default getElement
