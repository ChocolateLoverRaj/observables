import Observable from '../Observable'
import PromiseData from './PromiseData'

type ObservablePromise<T> = Observable<PromiseData<T>>

export default ObservablePromise
