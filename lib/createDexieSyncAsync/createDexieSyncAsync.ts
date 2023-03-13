import { liveQuery, Subscription } from 'dexie'
import wrapGetObservable from '../wrapGetObservable/wrapGetObservable'
import getObserve from '../observableValue/getObserve'
import SyncAsync from '../syncAsync/SyncAsync'
import createPendingPromise from '../observablePromise/createPendingPromise'
import createSyncAsync from '../syncAsync/create/create'
import set from '../observableValue/set'
import get from '../observableValue/get'
import Input from './Input'

const createDexieSyncAsync = <T>({ save, load }: Input<T>): SyncAsync<T> => {
  const observableValue = createPendingPromise<T>()

  return createSyncAsync({
    load: wrapGetObservable({
      getValue: () => get(observableValue),
      getInternalObserve: triggerUpdate => {
        const dexieObservable = liveQuery(load)
        let subscription: Subscription
        const internalObservable = getObserve(observableValue)

        return {
          add: () => {
            subscription = dexieObservable.subscribe(
              value => {
                set(observableValue, {
                  done: true,
                  result: {
                    success: true,
                    result: value
                  }
                })
              },
              error => {
                set(observableValue, {
                  done: true,
                  result: {
                    success: false,
                    result: error
                  }
                })
              })
            internalObservable.addRemove.add(triggerUpdate)
          },
          remove: () => {
            subscription.unsubscribe()
            internalObservable.addRemove.remove(triggerUpdate)
          }
        }
      }
    }),
    set: newData => {
      set(observableValue, {
        done: true,
        result: {
          success: true,
          result: newData
        }
      })
    },
    save
  })
}

export default createDexieSyncAsync
