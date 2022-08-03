import Listener from '../../Listener'
import Observable from '../../Observable'
import wrapGetObservable from '../../wrapGetObservable/wrapGetObservable'
import Event from '../Event'
import EventType from '../EventType'
import Input from '../getElement/Input'

const getElement = <T>({ observableArray: { array, listeners }, index }: Input<T>): Observable<T> =>
  wrapGetObservable({
    getValue: () => array[index],
    getInternalObserve: triggerUpdate => {
      const listener: Listener<[Event<T>]> = ({ type, data }) => {
        if (type === EventType.SPLICE &&
             index >= data.start &&
            (index < data.start + data.deleteCount)) {
          triggerUpdate()
        }
      }
      return {
        add: Set.prototype.add.bind(listeners, listener),
        remove: Set.prototype.delete.bind(listeners, listener)
      }
    }
  })

export default getElement
