import Observe from './Observe'

type Compute<T> = (observe: Observe) => T

export default Compute
