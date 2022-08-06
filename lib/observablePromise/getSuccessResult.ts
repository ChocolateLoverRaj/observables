import PromiseData from './PromiseData'

/**
 * If the promise is done and successful, it returns the result. Otherwise it returns `undefined`.
 */
const getSuccessResult = <T>({ done, result }: PromiseData<T>): T | undefined => {
  if (!done) return
  if (!result.success) return
  return result.result
}

export default getSuccessResult
