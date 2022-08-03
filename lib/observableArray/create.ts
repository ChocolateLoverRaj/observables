import ObservableArray from './ObservableArray'

const create = <T>(): ObservableArray<T> => ({
  listeners: new Set(),
  array: []
})

export default create
