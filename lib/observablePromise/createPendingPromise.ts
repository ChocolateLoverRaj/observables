import create from '../observableValue/create'
import ObservableValue from '../observableValue/ObservableValue'
import PromiseData from './PromiseData'

const createPendingPromise = <T>(): ObservableValue<PromiseData<T>> =>
  create<PromiseData<T>>({
    done: false,
    result: undefined
  })

export default createPendingPromise
