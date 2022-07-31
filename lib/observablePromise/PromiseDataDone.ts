import FailableResult from '../failableResult/FailableResult'

interface PromiseDataDone<T> {
  done: true
  value: FailableResult<T>
}

export default PromiseDataDone
