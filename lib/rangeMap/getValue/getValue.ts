import createComputedObservable from '../../computedObservable/createComputedObservable'
import Observable from '../../Observable'
import Input from '../getEntry/Input'
import getEntry from '../getEntry/getEntry'

const getValue = <T>(input: Input<T>): Observable<T | undefined> =>
  createComputedObservable(observe => observe(getEntry(input))?.value)

export default getValue
