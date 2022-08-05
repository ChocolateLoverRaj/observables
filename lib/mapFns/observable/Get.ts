import Observable from '../../Observable'
import InputKey from '../InputKey'

type Get<Data, K, V> = (input: InputKey<Data, K>) => Observable<V | undefined>

export default Get
