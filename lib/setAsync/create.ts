import SetAsync from './SetAsync'
import createObservableValue from '../observableValue/create'

const create = <T>(): SetAsync<T> => ({
  setting: createObservableValue(undefined),
  queued: undefined
})

export default create
