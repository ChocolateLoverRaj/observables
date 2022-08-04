import Listener from '../../Listener'
import Observable from '../../Observable'
import Event from '../../observableArray/Event'
import wrapGetObservable from '../../wrapGetObservable/wrapGetObservable'
import observableSet from '../ObservableSet'

const getIterator = <T>({
  data: { set, listeners }
}: observableSet<T, any>): Observable<IterableIterator<T>> => wrapGetObservable({
    getValue: () => set[Symbol.iterator](),
    getInternalObserve: triggerUpdate => {
      const listener: Listener<[Event<T>]> = () => {
        triggerUpdate()
      }
      return {
        add: Set.prototype.add.bind(listeners, listener),
        remove: Set.prototype.delete.bind(listeners, listener)
      }
    }
  })

export default getIterator
