import Get from '../Get'
import GetInternalObserve from './GetInternalObserve'

interface Input<T> {
  getValue: Get<T>
  getInternalObserve: GetInternalObserve
}

export default Input
