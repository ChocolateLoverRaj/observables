import GapArray from '../GapArray'

interface Input<T> {
  gapArray: GapArray<T>
  index: number
  array: readonly T[]
}

export default Input
