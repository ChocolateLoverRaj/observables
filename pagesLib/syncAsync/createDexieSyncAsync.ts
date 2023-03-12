import { liveQuery, Subscription } from 'dexie'
import never from 'never'
import wrapGetObservable from '../../lib/wrapGetObservable/wrapGetObservable'
import db from './dexie'
import getObserve from '../../lib/observableValue/getObserve'
import SyncAsync from '../../lib/syncAsync/SyncAsync'
import createPendingPromise from '../../lib/observablePromise/createPendingPromise'
import createSyncAsync from '../../lib/syncAsync/create/create'
import set from '../../lib/observableValue/set'
import get from '../../lib/observableValue/get'

const createDexieSyncAsync = (): SyncAsync<string> => {
  const observableValue = createPendingPromise<string>()

  return createSyncAsync({
    load: wrapGetObservable({
      getValue: () => get(observableValue),
      getInternalObserve: triggerUpdate => {
        const dexieObservable = liveQuery(async () => await db.data.get('') ?? never())
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
    save: async newData => {
      await db.data.put(newData, '')
    }
  })
}

export default createDexieSyncAsync
