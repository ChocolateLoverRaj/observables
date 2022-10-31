import ObservableValue from '../observableValue/ObservableValue'
import set from '../observableValue/set'
import promiseThenOrCatch from '../promiseThenOrCatch/promiseThenOrCatch'
import PromiseData from './PromiseData'

const handlePromise = <T>(
  observableValue: ObservableValue<PromiseData<T>>,
  promise: Promise<T>
): void => {
  promiseThenOrCatch(promise, result => {
    set(observableValue, {
      done: true,
      result
    })
  })
}

export default handlePromise
