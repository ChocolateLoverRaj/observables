import ObservableValue from '../observableValue/ObservableValue'
import SetAsync from '../setAsync/SetAsync'
import Load from './Load'
import Save from './Save'
import Set from './Set'

interface SyncAsync<T> {
  settingData: ObservableValue<T | undefined>
  load: Load<T>
  set: Set<T>
  save: Save<T>
  setAsync: SetAsync<T>
}

export default SyncAsync
