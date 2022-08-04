import PromiseDataDone from './PromiseDataDone'
import PromiseDataPending from './PromiseDataPending'

type PromiseData<T> = PromiseDataPending | PromiseDataDone<T>

export default PromiseData
