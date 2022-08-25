import Get from '../Get'

type SetFn<T> = Get<Promise<T>> | undefined

export default SetFn
