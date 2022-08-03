import RangeMap from '../RangeMap'

interface Input<T> {
  rangeMap: RangeMap<T>
  index: number
  useStartIndex: boolean
}

export default Input
