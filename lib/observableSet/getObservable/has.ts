import ObservableSet from '../ObservableSet'
import Observable from '../../Observable'
import Listener from '../../Listener'
import ChangeEvent from '../ChangeEvent'
import ChangeEventType from '../ChangeEventType'
import wrapGetObservable from '../../wrapGetObservable/wrapGetObservable'

const has = <T>(
  {
    setFns: { has: setFnsHas },
    data: { set, listeners }
  }: ObservableSet<T, any>,
  value: T
): Observable<boolean> => {
  const has = (): boolean =>
    setFnsHas({
      data: set,
      value
    })
  return wrapGetObservable({
    getValue: has,
    getInternalObserve: triggerUpdate => {
      const internalListener: Listener<[ChangeEvent<T>]> = (event) => {
        if (event.type === ChangeEventType.CLEAR ? has() : event.value === value) {
          triggerUpdate()
        }
      }
      return {
        add: Set.prototype.add.bind(listeners, internalListener),
        remove: Set.prototype.delete.bind(listeners, internalListener)
      }
    }
  })
}

export default has
