import emit from '../emit/emit'
import Listener from '../Listener'
import Observable from '../Observable'
import Compute from './Compute'

const createComputedObservable = <T>(compute: Compute<T>): Observable<T> => {
  const listeners = new Set<Listener<[]>>()
  const dependOnObservables = new Set<Observable<any>>()
  const internalListener: Listener<[]> = () => {
    emit({
      forEach: Set.prototype.forEach.bind(listeners),
      inputs: []
    })
  }
  const observeDependOnStart = (): void => {
    dependOnObservables.forEach(({ addRemove: { add } }) => add(internalListener))
  }
  const observeDependOnStop = (): void => {
    dependOnObservables.forEach(({ addRemove: { remove } }) => remove(internalListener))
  }

  return {
    addRemove: {
      add: listener => {
        if (listeners.size === 0) {
          observeDependOnStart()
        }
        listeners.add(listener)
      },
      remove: listener => {
        listeners.delete(listener)
        if (listeners.size === 0) {
          observeDependOnStop()
        }
      }
    },
    getValue: () => {
      observeDependOnStop()
      dependOnObservables.clear()
      const value = compute(observable => {
        dependOnObservables.add(observable)
        return observable.getValue()
      })
      observeDependOnStart()
      return value
    }
  }
}

export default createComputedObservable
