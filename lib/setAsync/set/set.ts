import Input from './Input'
import get from '../../observableValue/get'
import handlePromise from '../../observablePromise/handlePromise'
import setObservableValue from '../../observableValue/set'

const set = <T>({ setAsync, setFn }: Input<T>): void => {
  const callQueued = (): void => {
    if (setAsync.queued !== undefined) {
      const setPromise = setAsync.queued()
      setObservableValue(setAsync.setting, {
        done: false,
        result: undefined
      })
      handlePromise(setAsync.setting, setPromise)
      setPromise.finally(() => callQueued())
      setAsync.queued = undefined
    }
  }

  setAsync.queued = setFn
  if (get(setAsync.setting).done) {
    callQueued()
  }
}

export default set
