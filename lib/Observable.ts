import AddRemove from './AddRemove'
import Get from './Get'
import Listener from './Listener'

interface Observable<T> {
  getValue: Get<T>
  addRemove: AddRemove<Listener<[]>>
}

export default Observable
