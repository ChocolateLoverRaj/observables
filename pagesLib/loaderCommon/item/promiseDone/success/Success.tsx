import { FC } from 'react'
import Props from './Props'

const Success: FC<Props> = ({ loadedItem: { startIndex, indexInBatch, itemsInBatch }, index }) => {
  return (
    <>
      Index: {index}.
      Batch start index: {startIndex}.
      Index in batch: {indexInBatch}.
      Items in batch: {itemsInBatch}.
    </>
  )
}

export default Success
