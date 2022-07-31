import Input from './Input'

const emit = <T extends unknown[]>({ forEach, inputs }: Input<T>): void => {
  forEach((listener) => listener(...inputs))
}

export default emit
