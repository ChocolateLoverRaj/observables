import ThenOrCatchResult from './ThenOrCatchResult'

/**
 * Let's you await promises without using a catch urself
 */
const wrap = async <T>(promise: PromiseLike<T>): Promise<ThenOrCatchResult<T>> =>
  await promise.then(
    result => ({ successful: true, result }),
    result => ({ successful: false, result }))

export default wrap
