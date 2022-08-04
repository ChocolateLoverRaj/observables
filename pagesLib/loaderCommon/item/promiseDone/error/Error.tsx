import { FC, useContext } from 'react'
import retry from '../../../../../lib/rangeLoader/retry/retry'
import Context from '../../../Context'
import Props from './Props'

const Error: FC<Props> = ({ index }) => {
  const rangeLoader = useContext(Context)

  return (
    <>
      Error Loading Item
      {' '}
      <button
        onClick={() => retry({ rangeLoader, index })}
      >
        Retry
      </button>
    </>
  )
}

export default Error
