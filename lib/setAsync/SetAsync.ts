import PromiseData from '../observablePromise/PromiseData'
import ObservableValue from '../observableValue/ObservableValue'
import SetFn from './SetFn'

interface SetAsync<T> {
  setting: ObservableValue<PromiseData<T | undefined>>
  queued: SetFn<T>
}

export default SetAsync
