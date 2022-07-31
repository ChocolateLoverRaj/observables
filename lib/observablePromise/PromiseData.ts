import PromiseDataDone from './PromiseDataDone'
import PromiseDataPending from './PromiseDataPending'

type PromiseData<T> = PromiseDataPending<T> | PromiseDataDone<T>

export default PromiseData
