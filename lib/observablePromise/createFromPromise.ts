import create from '../observableValue/create'
import getObserve from '../observableValue/getObserve'
import set from '../observableValue/set'
import promiseThenOrCatch from '../promiseThenOrCatch/promiseThenOrCatch'
import ObservablePromise from './ObservablePromise'
import PromiseData from './PromiseData'

const createFromPromise = <T>(promise: Promise<T>): ObservablePromise<T> => {
  const observableValue = create<PromiseData<T>>({
    done: false,
    value: promise
  })
  promiseThenOrCatch(promise, result => {
    set(observableValue, {
      done: true,
      value: result
    })
  })
  return getObserve(observableValue)
}

export default createFromPromise
