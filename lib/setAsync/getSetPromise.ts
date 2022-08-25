import createComputedObservable from '../computedObservable/createComputedObservable'
import ObservablePromise from '../observablePromise/ObservablePromise'
import getObserve from '../observableValue/getObserve'
import SetAsync from './SetAsync'

/**
 * Returns a resolved promise if nothing was set for consistency
 */
const getSetPromise = (setAsync: SetAsync<any>): ObservablePromise<void> =>
  createComputedObservable(observe => {
    const setPromise = observe(getObserve(setAsync.setting))
    return setPromise !== undefined
      ? observe(setPromise)
      : { done: true, result: { result: undefined, success: true } }
  })

export default getSetPromise
