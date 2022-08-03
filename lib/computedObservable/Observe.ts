import Observable from '../Observable'

type Observe = <T>(observableValue: Observable<T>) => T

export default Observe
