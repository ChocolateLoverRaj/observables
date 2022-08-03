import Range from '../../Range'
import RangeLoader from '../RangeLoader'

interface Input<T> {
  rangeLoader: RangeLoader<T>
  range: Range
}

export default Input
