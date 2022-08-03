import Range from '../Range'

type LoadFn<T> = (input: Range) => Promise<readonly T[]>

export default LoadFn
