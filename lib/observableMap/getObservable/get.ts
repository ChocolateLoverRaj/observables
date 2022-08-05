import Observable from '../../Observable'
import wrapGetObservable from '../../wrapGetObservable/wrapGetObservable'
import getNotObservable from '../get/get'
import Listener from '../../Listener'
import Event from '../Event'
import EventType from '../EventType'
import ObservableMap from '../ObservableMap'
import InputKey from '../../mapFns/InputKey'

const get = <K, V>(input: InputKey<ObservableMap<K, V>, K>): Observable<V | undefined> =>
  wrapGetObservable({
    getValue: () => getNotObservable(input),
    getInternalObserve: triggerUpdate => {
      const listener: Listener<[Event<K, V>]> = ({ type, data }) => {
        if (type === EventType.SET && data.key === input.key) {
          triggerUpdate()
        }
      }
      return {
        add: Set.prototype.add.bind(input.data.listeners, listener),
        remove: Set.prototype.delete.bind(input.data.listeners, listener)
      }
    }
  })

export default get
