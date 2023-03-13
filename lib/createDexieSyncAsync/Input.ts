import Save from '../syncAsync/Save'
import Load from './Load'

interface Input<T> {
  load: Load<T>
  save: Save<T>
}

export default Input
