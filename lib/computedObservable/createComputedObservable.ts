import never from 'never'
import emit from '../emit/emit'
import Listener from '../Listener'
import Observable from '../Observable'
import Compute from './Compute'
import diff from 'set-diffs'

const createComputedObservable = <T>(compute: Compute<T>): Observable<T> => {
  const listeners = new Set<Listener<[]>>()
  // let dependOnObservables = new Set<Observable<any>>()
  interface Observed<T> {
    value: T
    dependOnObservables: Set<Observable<any>>
  }
  let observed: Observed<T> | undefined

  const updateDependOnObservables = (): void => {
    const newDependOnObservables = new Set<Observable<any>>()
    const value = compute(observable => {
      newDependOnObservables.add(observable)
      return observable.getValue()
    })
    const { add, remove } = diff(observed?.dependOnObservables ?? new Set(), newDependOnObservables)
    add.forEach(({ addRemove: { add } }) => add(internalListener))
    remove.forEach(({ addRemove: { remove } }) => remove(internalListener))
    observed = { value, dependOnObservables: newDependOnObservables }
  }

  const internalListener: Listener<[]> = () => {
    updateDependOnObservables()
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
          (observed ?? never()).dependOnObservables.forEach(({ addRemove: { remove } }) =>
            remove(internalListener))
          observed = undefined
        }
      }
    },
    getValue: () => observed !== undefined ? observed.value : compute(({ getValue }) => getValue())
  }
}

export default createComputedObservable
