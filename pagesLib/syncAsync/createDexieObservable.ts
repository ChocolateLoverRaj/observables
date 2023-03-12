import { liveQuery, Subscription } from 'dexie'
import never from 'never'
import Observable from '../../lib/Observable'
import ObservablePromise from '../../lib/observablePromise/ObservablePromise'
import createObservableValue from '../../lib/observableValue/create'
import wrapGetObservable from '../../lib/wrapGetObservable/wrapGetObservable'
import db from './dexie'
import getObserve from '../../lib/observableValue/getObserve'
import PromiseData from '../../lib/observablePromise/PromiseData'

const createDexieObservable = (): Observable<ObservablePromise<string>> => {
  let promiseData: PromiseData<string> = {
    done: false,
    result: undefined
  }

  return wrapGetObservable({
    getValue: () => getObserve(createObservableValue(promiseData)),
    getInternalObserve: triggerUpdate => {
      const dexieObservable = liveQuery(async () => await db.data.get('') ?? never())
      let subscription: Subscription

      return {
        add: () => {
          subscription = dexieObservable.subscribe(
            value => {
              promiseData = {
                done: true,
                result: {
                  success: true,
                  result: value
                }
              }
              triggerUpdate()
            },
            error => {
              promiseData = {
                done: true,
                result: {
                  success: false,
                  result: error
                }
              }
              triggerUpdate()
            })
        },
        remove: () => {
          subscription.unsubscribe()
        }
      }
    }
  })
}

export default createDexieObservable
