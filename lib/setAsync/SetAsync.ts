import ObservablePromise from '../observablePromise/ObservablePromise'
import ObservableValue from '../observableValue/ObservableValue'
import SetFn from './SetFn'

interface SetAsync<T> {
  setting: ObservableValue<ObservablePromise<T> | undefined>
  queued: SetFn<T>
}

export default SetAsync
