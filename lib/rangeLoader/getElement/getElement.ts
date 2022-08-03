import createComputedObservable from '../../computedObservable/createComputedObservable'
import ObservablePromise from '../../observablePromise/ObservablePromise'
import getValue from '../../rangeMap/getValue/getValue'
import Input from './Input'
import getGapArrayElement from '../../gapArray/get/get'
import PromiseDataDone from '../../observablePromise/PromiseDataDone'
import never from 'never'

const getElement = <T>(
  { rangeLoader: { loadPromises, loaded }, index }: Input<T>
): ObservablePromise<T> =>
    createComputedObservable(observe => {
      const observablePromise = observe(getValue({ rangeMap: loadPromises, index }))
      if (observablePromise !== undefined) {
        const promiseData = observe(observablePromise)
        if (!promiseData.done) {
          return {
            done: false,
            value: (async () => {
              await promiseData.value
              return getGapArrayElement({ gapArray: loaded, index }).getValue() ?? never()
            })()
          }
        } else {
          return promiseData as PromiseDataDone<any>
        }
      } else {
        return {
          done: true,
          value: {
            success: true,
            result: observe(getGapArrayElement({ gapArray: loaded, index })) ?? never()
          }
        }
      }
    })

export default getElement
