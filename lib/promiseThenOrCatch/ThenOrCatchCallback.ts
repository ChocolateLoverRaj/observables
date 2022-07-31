import FailableResult from '../failableResult/FailableResult'

type ThenOrCatchCallback<T> = (result: FailableResult<T>) => void

export default ThenOrCatchCallback
