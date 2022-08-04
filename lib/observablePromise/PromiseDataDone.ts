import FailableResult from '../failableResult/FailableResult'

interface PromiseDataDone<T> {
  done: true
  result: FailableResult<T>
}

export default PromiseDataDone
