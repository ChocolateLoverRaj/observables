import useConstant from 'use-constant'
import wait from 'wait'
import createFromPromise from '../../lib/observablePromise/createFromPromise'
import ObservablePromise from '../../lib/observablePromise/ObservablePromise'
import reactObserver from '../../lib/reactObserver/reactObserver'
import createSyncAsync from '../../lib/syncAsync/create/create'
import createObservableValue from '../../lib/observableValue/create'
import getObserve from '../../lib/observableValue/getObserve'
import setObservableValue from '../../lib/observableValue/set'
import PromiseDataDone from '../../lib/observablePromise/PromiseDataDone'
import getSyncAsync from '../../lib/syncAsync/get/get'
import setSyncAsync from '../../lib/syncAsync/set/set'

const SyncAsyncComponent = reactObserver(observe => {
  const syncAsync = useConstant(() => {
    const loadObservableValue = createObservableValue<ObservablePromise<string>>(createFromPromise((async () => {
      await wait(2000)
      return 'Broccolli'
    })()))

    return createSyncAsync({
      load: getObserve(loadObservableValue),
      save: async newData => {
        await wait(2000)
        setObservableValue(loadObservableValue, getObserve(createObservableValue<PromiseDataDone<string>>({
          done: true,
          result: {
            success: true,
            result: newData
          }
        })))
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
      Edit async data:
      <input 
        value={data}
        onChange={({ target: { value }}) => {
          setSyncAsync({syncAsync, newData: value})
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

export default SyncAsyncComponent
