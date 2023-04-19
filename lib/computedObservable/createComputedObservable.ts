import emit from '../emit/emit'
import Listener from '../Listener'
import Observable from '../Observable'
import Compute from './Compute'
import diff from 'set-diffs'

const createComputedObservable = <T>(compute: Compute<T>): Observable<T> => {
  const listeners = new Set<Listener<[]>>()
  let dependOnObservables = new Set<Observable<any>>()

  const updateDependOnObservables = (): void => {
    const newDependOnObservables = new Set<Observable<any>>()
    compute(observable => {
      newDependOnObservables.add(observable)
      return observable.getValue()
    })
    const { add, remove } = diff(dependOnObservables, newDependOnObservables)
    add.forEach(({ addRemove: { add } }) => add(internalListener))
    remove.forEach(({ addRemove: { remove } }) => remove(internalListener))
    dependOnObservables = newDependOnObservables
  }

  const internalListener: Listener<[]> = () => {
    emit({
      forEach: Set.prototype.forEach.bind(listeners),
      inputs: []
    })
  }

  return {
    addRemove: {
      add: listener => {
        if (listeners.size === 0) {
          updateDependOnObservables()
        }
        listeners.add(listener)
      },
      remove: listener => {
        listeners.delete(listener)
        if (listeners.size === 0) {
          dependOnObservables.forEach(({ addRemove: { remove } }) => remove(internalListener))
          dependOnObservables.clear()
        }
      }
    },
    getValue: () => compute(({ getValue }) => getValue())
  }
}

export default createComputedObservable
