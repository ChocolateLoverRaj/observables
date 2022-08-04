import { FC, useContext } from 'react'
import getLength from '../../../lib/rangeLoader/getLength'
import loadRange from '../../../lib/rangeLoader/loadRange/loadRange'
import Props from './Props'
import Context from '../../loaderCommon/Context'

const LoadMore: FC<Props> = ({ itemsPerBatch }) => {
  const rangeLoader = useContext(Context)

  return (
    <button
      onClick={() => {
        loadRange({
          rangeLoader,
          range: {
            start: getLength(rangeLoader).getValue(),
            length: itemsPerBatch
          }
        })
      }}
    >
      Load More
    </button>
  )
}

export default LoadMore
