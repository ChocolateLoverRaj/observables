import SyncAsync from '../SyncAsync'
import Input from './Input'
import createObservableValue from '../../observableValue/create'
import createSetAsync from '../../setAsync/create'

const create = <T>({ load, save, set }: Input<T>): SyncAsync<T> => ({
  settingData: createObservableValue(undefined),
  load,
  save,
  setAsync: createSetAsync(),
  set
})

export default create
