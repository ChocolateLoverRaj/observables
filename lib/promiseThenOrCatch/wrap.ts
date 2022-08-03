import FailableResult from '../failableResult/FailableResult'

/**
 * Let's you await promises without using a catch urself
 */
const wrap = async <T>(promise: PromiseLike<T>): Promise<FailableResult<T>> =>
  await promise.then(
    result => ({ success: true, result }),
    result => ({ success: false, result }))

export default wrap
