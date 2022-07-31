import { useState } from 'react'
import FailableResult from '../../lib/failableResult/FailableResult'
import create from '../../lib/observableValue/create'
import getObserve from '../../lib/observableValue/getObserve'
import set from '../../lib/observableValue/set'
import reactObserver from '../../lib/reactObserver/reactObserver'
import Props from './Props'

const observableResult = create<FailableResult<number> | undefined>(undefined)

const AsyncAction = reactObserver<Props>((observe, { delay }) => {
  const [succeed, setSucceed] = useState(true)

  const result = observe(getObserve(observableResult))

  const fetch = (): void => {
    setTimeout(() => {
      /* eslint-disable @typescript-eslint/indent */
      set(observableResult, succeed
        ? {
          success: true,
          result: Math.random()
        }
        : {
          success: false,
          result: new Error('Failed')
        })
      /* eslint-enable @typescript-eslint/indent */
    }, delay)
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
      <br /><button onClick={fetch}>{result === undefined ? 'Fetch' : 'Fetch Again'}</button>
      {result !== undefined && (
        <>
          <br />
          {result.success
            ? (
              <>
                Result: {result.result}
              </>)
            : (
              <>
                Error <button onClick={fetch}>Retry</button>
              </>)}
          <button
            onClick={() => {
              set(observableResult, undefined)
            }}
          >
            Reset
          </button>
        </>)}
    </>
  )
})

export default AsyncAction
