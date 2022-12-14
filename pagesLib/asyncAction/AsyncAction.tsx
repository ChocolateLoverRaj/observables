import { useState } from 'react'
import createFromPromise from '../../lib/observablePromise/createFromPromise'
import ObservablePromise from '../../lib/observablePromise/ObservablePromise'
import create from '../../lib/observableValue/create'
import getObserve from '../../lib/observableValue/getObserve'
import set from '../../lib/observableValue/set'
import reactObserver from '../../lib/reactObserver/reactObserver'
import ObservablePromiseComponent from './observablePromiseComponent/ObservablePromiseComponent'
import Props from './Props'
import wait from 'wait'

const observableResult = create<ObservablePromise<number> | undefined>(undefined)

const AsyncAction = reactObserver<Props>((observe, { delay }) => {
  const [succeed, setSucceed] = useState(true)

  const result = observe(getObserve(observableResult))

  const fetch = (): void => {
    set(observableResult, createFromPromise((async () => {
      await wait(delay)
      if (succeed) {
        return (Math.random())
      } else {
        throw new Error('Supposed to fail')
      }
    })()))
  }

  return (
    <>
      <label>
        Succeed
        <input
          type='checkbox'
          checked={succeed}
          onChange={({ target: { checked } }) => setSucceed(checked)}
        />
      </label>
      <br />
      <button onClick={fetch}>{result === undefined ? 'Fetch' : 'Fetch Again'}</button>
      <button
        onClick={() => {
          set(observableResult, undefined)
        }}
      >
        Reset
      </button>
      {result !== undefined && (
        <>
          <br />
          <ObservablePromiseComponent observablePromise={result} retry={fetch} />
        </>)}
    </>
  )
})

export default AsyncAction
