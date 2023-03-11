import Observable from '../../Observable'
import ObservablePromise from '../../observablePromise/ObservablePromise'
import PromiseData from '../../observablePromise/PromiseData'

type Output<T> = Observable<{
  data: T | undefined
  loadPromise: ObservablePromise<T> | undefined
  savePromise: PromiseData<void>
}>

export default Output
