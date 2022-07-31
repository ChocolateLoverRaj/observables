import ThenOrCatchCallback from './ThenOrCatchCallback'

/**
 * Call one callback for both promise `.then` and `.catch`, with inputs about if it was successful.
 */
const promiseThenOrCatch = <T>(
  promise: PromiseLike<T>,
  thenOrCatchCallback: ThenOrCatchCallback<T>
): void => {
  promise.then(value => {
    thenOrCatchCallback({
      success: true,
      result: value
    })
  }, error => {
    thenOrCatchCallback({
      success: false,
      result: error
    })
  })
}

export default promiseThenOrCatch
