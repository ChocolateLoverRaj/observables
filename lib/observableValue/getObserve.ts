import Observable from '../Observable'
import ObservableValue from './ObservableValue'

const getObserve = <T>({ observable }: ObservableValue<T>): Observable<T> =>
  observable

export default getObserve
