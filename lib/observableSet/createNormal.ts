import create from './create/create'
import ObservableSet from './ObservableSet'
import add from '../setFnsNormal/add'
import remove from '../setFnsNormal/remove'
import has from '../setFnsNormal/has'
import forEach from '../setFnsNormal/forEach'

const createNormal = <T>(set: Set<T> = new Set()): ObservableSet<T, Set<T>> =>
  create({
    setData: set,
    setFns: {
      add,
      remove,
      has,
      forEach
    }
  })

export default createNormal
