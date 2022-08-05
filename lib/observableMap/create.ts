import ObservableMap from './ObservableMap'

const create = <K, V>(): ObservableMap<K, V> => ({
  map: new Map(),
  listeners: new Set()
})

export default create
