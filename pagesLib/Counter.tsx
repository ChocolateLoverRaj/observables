import getObserve from '../lib/observableValue/getObserve'
import reactObserver from '../lib/reactObserver/reactObserver'
import create from '../lib/observableValue/create'
import set from '../lib/observableValue/set'
import get from '../lib/observableValue/get'

const observableNumber = create(0)

const Counter = reactObserver((observe) => {
  return (
    <>
      Number: {observe(getObserve(observableNumber))}
      <br />
      <button onClick={() => set(observableNumber, get(observableNumber) + 1)}>
        +1
      </button>
      <button onClick={() => set(observableNumber, get(observableNumber) - 1)}>
        -1
      </button>
    </>
  )
})

export default Counter
