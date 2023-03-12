import useConstant from 'use-constant'
import reactObserver from '../../lib/reactObserver/reactObserver'
import getSyncAsync from '../../lib/syncAsync/get/get'
import setSyncAsync from '../../lib/syncAsync/set/set'
import createDexieSyncAsync from './createDexieSyncAsync'

const SyncAsyncWithDexie = reactObserver(observe => {
  const syncAsync = useConstant(createDexieSyncAsync)
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
