import SyncAsync from '../SyncAsync'

interface Input<T> {
  syncAsync: SyncAsync<T>
  newData: T
}

export default Input
