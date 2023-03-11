import Observable from '../../Observable'
import ObservablePromise from '../../observablePromise/ObservablePromise'
import Save from '../Save'

interface Input<T> {
  load: Observable<ObservablePromise<T>>
  save: Save<T>
}

export default Input
