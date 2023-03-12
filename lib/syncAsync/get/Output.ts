import Observable from '../../Observable'
import PromiseData from '../../observablePromise/PromiseData'

type Output<T> = Observable<{
  data: T | undefined
  loadPromiseData: PromiseData<T>
  savePromise: PromiseData<void>
}>

export default Output
