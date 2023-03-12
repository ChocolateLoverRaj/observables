import useConstant from 'use-constant'
import reactObserver from '../../lib/reactObserver/reactObserver'
import createSyncAsync from '../../lib/syncAsync/create/create'
import getSyncAsync from '../../lib/syncAsync/get/get'
import setSyncAsync from '../../lib/syncAsync/set/set'
import createDexieObservable from './createDexieObservable'
import db from './dexie'

const SyncAsyncWithDexie = reactObserver(observe => {
  const syncAsync = useConstant(() => {
    return createSyncAsync({
      load: createDexieObservable(),
      save: async newData => {
        await db.data.put(newData, '')
      }
    })
  })
  const { data, savePromise } = observe(getSyncAsync(syncAsync))

  return (
    <>
      {data !== undefined
        ? (
          <>
            <label>
              Edit async data. You can even open this in another tab and changes will be synced:
              <input
                value={data}
                onChange={({ target: { value } }) => {
                  console.log('set', value)
                  setSyncAsync({ syncAsync, newData: value })
                }}
              />
            </label>
            {savePromise.done
              ? !savePromise.result.success && 'Error saving'
              : 'Saving'}
          </>
          )
        : <>Loading data</>}
    </>
  )
})

export default SyncAsyncWithDexie
