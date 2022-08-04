import createComputedObservable from '../../computedObservable/createComputedObservable'
import ObservablePromise from '../../observablePromise/ObservablePromise'
import getValue from '../../rangeMap/getValue/getValue'
import Input from './Input'
import getGapArrayElement from '../../gapArray/get/get'
import PromiseDataDone from '../../observablePromise/PromiseDataDone'

const getElement = <T>(
  { rangeLoader: { loadPromises, loaded }, index }: Input<T>
): ObservablePromise<T | undefined> =>
    createComputedObservable(observe => {
      const observablePromise = observe(getValue({ rangeMap: loadPromises, index }))
      if (observablePromise !== undefined) {
        const promiseData = observe(observablePromise)
        if (!promiseData.done) {
          return {
            done: false,
            result: undefined
          }
        } else {
          return promiseData as PromiseDataDone<any>
        }
      } else {
        return {
          done: true,
          result: {
            success: true,
            result: observe(getGapArrayElement({ gapArray: loaded, index }))
          }
        }
      }
    })

export default getElement
