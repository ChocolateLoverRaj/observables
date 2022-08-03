import Listener from '../../Listener'
import Observable from '../../Observable'
import wrapGetObservable from '../../wrapGetObservable/wrapGetObservable'
import Event from '../Event'
import EventType from '../EventType'
import ObservableArray from '../ObservableArray'

const getLength = <T>({ array, listeners }: ObservableArray<T>): Observable<number> =>
  wrapGetObservable({
    getValue: () => array.length,
    getInternalObserve: triggerUpdate => {
      const listener: Listener<[Event<T>]> = ({ type, data }) => {
        if (type === EventType.SPLICE && data.deleteCount !== data.insert.length) {
          triggerUpdate()
        }
      }
      return {
        add: Set.prototype.add.bind(listeners, listener),
        remove: Set.prototype.delete.bind(listeners, listener)
      }
    }
  })

export default getLength
