import Observable from '../Observable'
import ObservablePromise from '../observablePromise/ObservablePromise'
import ObservableValue from '../observableValue/ObservableValue'
import SetAsync from '../setAsync/SetAsync'
import Save from './Save'

interface SyncAsync<T> {
  settingData: ObservableValue<T | undefined>
  load: Observable<ObservablePromise<T>>
  save: Save<T>
  setAsync: SetAsync<T>
}

export default SyncAsync
