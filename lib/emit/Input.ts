import ForEachCallback from '../forEach/ForEachCallback'
import Listener from '../Listener'

interface Input<T extends unknown[]> {
  forEach: (callback: ForEachCallback<Listener<T>>) => void
  inputs: T
}

export default Input
