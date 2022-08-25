import SetAsync from '../SetAsync'
import SetFn from '../SetFn'

interface Input<T> {
  setAsync: SetAsync<T>
  setFn: SetFn<T>
}

export default Input
