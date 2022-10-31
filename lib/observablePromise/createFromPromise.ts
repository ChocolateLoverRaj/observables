import getObserve from '../observableValue/getObserve'
import createPendingPromise from './createPendingPromise'
import handlePromise from './handlePromise'
import ObservablePromise from './ObservablePromise'

const createFromPromise = <T>(promise: Promise<T>): ObservablePromise<T> => {
  const observableValue = createPendingPromise<T>()
  handlePromise(observableValue, promise)
  return getObserve(observableValue)
}

export default createFromPromise
