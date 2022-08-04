import reactObserver from '../../../lib/reactObserver/reactObserver'
import Props from './Props'

const ObservablePromiseComponent = reactObserver<Props>((observe, { observablePromise, retry }) => {
  const { done, result } = observe(observablePromise)
  return (
    <>
      {done
        ? result.success
          ? (
            <>
              Result: {result.result}
            </>)
          : (
            <>
              Error <button onClick={retry}>Retry</button>
            </>)
        : <>Fetching</>}
    </>
  )
})

export default ObservablePromiseComponent
