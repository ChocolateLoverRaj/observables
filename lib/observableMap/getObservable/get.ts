import Observable from '../../Observable'
import wrapGetObservable from '../../wrapGetObservable/wrapGetObservable'
import Input from '../get/Input'
import getNotObservable from '../get/get'
import Listener from '../../Listener'
import Event from '../Event'
import EventType from '../EventType'

const get = <K, V>(input: Input<K, V>): Observable<V | undefined> => wrapGetObservable({
  getValue: () => getNotObservable(input),
  getInternalObserve: triggerUpdate => {
    const listener: Listener<[Event<K, V>]> = ({ type, data }) => {
      if (type === EventType.SET && data.key === input.key) {
        triggerUpdate()
      }
    }
    return {
      add: Set.prototype.add.bind(input.observableMap.listeners, listener),
      remove: Set.prototype.delete.bind(input.observableMap.listeners, listener)
    }
  }
})

export default get
