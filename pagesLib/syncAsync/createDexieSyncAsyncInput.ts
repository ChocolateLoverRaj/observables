import never from 'never'
import db from './dexie'
import Input from '../../lib/createDexieSyncAsync/Input'

const createDexieSyncAsyncInput: Input<string> = {
  load: async () => await db.data.get('') ?? never(),
  save: async newData => {
    await db.data.put(newData, '')
  }
}

export default createDexieSyncAsyncInput
