import { FC } from 'react'
import Error from './error/Error'
import Props from './Props'
import Success from './success/Success'

const PromiseDone: FC<Props> = ({ failableResult, index }) => {
  return (
    <>
      {failableResult.success
        ? <Success loadedItem={failableResult.result} />
        : <Error error={failableResult.result} index={index} />}
    </>
  )
}

export default PromiseDone
