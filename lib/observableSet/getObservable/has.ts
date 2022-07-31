import ObservableSet from '../ObservableSet'
import Observable from '../../Observable'
import Listener from '../../Listener'
import ChangeEvent from '../ChangeEvent'
import ChangeEventType from '../ChangeEventType'
import emit from '../../emit/emit'

const has = <T>(
  {
    setFns: { has: setFnsHas },
    data: { set, listeners: setListeners }
  }: ObservableSet<T, any>,
  value: T
): Observable<boolean> => {
  const has = (): boolean =>
    setFnsHas({
      data: set,
      value
    })

  const listeners = new Set<Listener<[]>>()
  const setListener: Listener<[ChangeEvent<T>]> = (event) => {
    if (event.type === ChangeEventType.CLEAR ? has() : event.value === value) {
      emit({ forEach: Set.prototype.forEach.bind(listeners), inputs: [] })
    }
  }

  return {
    getValue: has,
    addRemove: {
      add: (listener) => {
        if (listeners.size === 0) {
          setListeners.add(setListener)
        }
        listeners.add(listener)
      },
      remove: (listener) => {
        listeners.delete(listener)
        if (listeners.size === 0) {
          setListener.bind(setListener)
        }
      }
    }
  }
}

export default has
