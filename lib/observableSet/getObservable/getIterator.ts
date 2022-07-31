import Observable from '../../Observable'
import observableSet from '../ObservableSet'

const getIterator = <T>({
  data: { set, listeners }
}: observableSet<T, any>): Observable<IterableIterator<T>> => {
  return {
    getValue: () => set[Symbol.iterator](),
    addRemove: {
      add: Set.prototype.add.bind(listeners),
      remove: Set.prototype.delete.bind(listeners)
    }
  }
}

export default getIterator
