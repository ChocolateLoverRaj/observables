import SetAsync from './SetAsync'
import createObservableValue from '../observableValue/create'

const create = <T>(): SetAsync<T> => ({
  setting: createObservableValue({ done: true, result: { success: true, result: undefined } }),
  queued: undefined
})

export default create
