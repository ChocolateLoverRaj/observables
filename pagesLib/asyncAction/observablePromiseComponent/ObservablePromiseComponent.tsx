import reactObserver from '../../../lib/reactObserver/reactObserver'
import Props from './Props'

const ObservablePromiseComponent = reactObserver<Props>((observe, { observablePromise, retry }) => {
  const { done, value } = observe(observablePromise)
  return (
    <>
      {done
        ? value.success
          ? (
            <>
              Result: {value.result}
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
