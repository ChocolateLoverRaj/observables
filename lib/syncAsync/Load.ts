import Observable from '../Observable'
import PromiseData from '../observablePromise/PromiseData'

type Load<T> = Observable<PromiseData<T>>

export default Load
