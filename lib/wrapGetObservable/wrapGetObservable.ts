import emit from '../emit/emit'
import Listener from '../Listener'
import Observable from '../Observable'
import Input from './Input'

const wrapGetObservable = <T>({ getInternalObserve, getValue }: Input<T>): Observable<T> => {
  const listeners = new Set<Listener<[]>>()
  const internalObserve = getInternalObserve(() => {
    emit({ forEach: Set.prototype.forEach.bind(listeners), inputs: [] })
  })

  return {
    getValue,
    addRemove: {
      add: listener => {
        if (listeners.size === 0) {
          internalObserve.add(undefined)
        }
        listeners.add(listener)
      },
      remove: listener => {
        listeners.delete(listener)
        if (listeners.size === 0) {
          internalObserve.remove(undefined)
        }
      }
    }
  }
}

export default wrapGetObservable
