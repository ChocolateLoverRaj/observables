import createComputedObservable from '../../computedObservable/createComputedObservable'
import getObserve from '../../observableValue/getObserve'
import getSetPromise from '../../setAsync/getSetPromise'
import SyncAsync from '../SyncAsync'
import Output from './Output'
import getSuccessResult from '../../observablePromise/getSuccessResult'

const get = <T>({
  settingData,
  setAsync,
  load
}: SyncAsync<T>): Output<T> => createComputedObservable(observe => {
    const savePromise = observe(getSetPromise(setAsync))
    const loadPromise = observe(load)

    return {
      data: observe(getObserve(settingData)) ?? getSuccessResult(loadPromise),
      loadPromiseData: loadPromise,
      savePromise
    }
  })

export default get
