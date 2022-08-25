import setObservableValue from '../../observableValue/set'
import createFromPromise from '../../observablePromise/createFromPromise'
import Input from './Input'
import get from '../../observableValue/get'

const set = <T>({ setAsync, setFn }: Input<T>): void => {
  const callQueued = (): void => {
    if (setAsync.queued !== undefined) {
      const setPromise = setAsync.queued()
      setPromise.finally(() => callQueued())
      setObservableValue(setAsync.setting, createFromPromise(setPromise))
      setAsync.queued = undefined
    }
  }

  setAsync.queued = setFn
  if (get(setAsync.setting) === undefined) {
    callQueued()
  }
}

export default set
