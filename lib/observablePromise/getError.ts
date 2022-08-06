import PromiseData from './PromiseData'

const getError = <T>({ done, result }: PromiseData<T>): any | undefined => {
  if (!done) return
  if (result.success) return
  return result.result
}

export default getError
