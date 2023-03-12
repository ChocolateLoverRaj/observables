import Load from '../Load'
import Save from '../Save'
import Set from '../Set'

interface Input<T> {
  load: Load<T>
  set: Set<T>
  save: Save<T>
}

export default Input
