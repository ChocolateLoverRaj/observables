import FailableResultFailure from './FailableResultFailure'
import FailableResultSuccess from './FailableResultSuccess'

// Success is first because it's good to be optimistic
type FailableResult<T> = FailableResultSuccess<T> | FailableResultFailure

export default FailableResult
