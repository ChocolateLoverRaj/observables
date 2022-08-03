import { FC } from 'react'
import Props from './Props'

const Success: FC<Props> = ({ loadedItem: { startIndex, indexInBatch, itemsInBatch } }) => {
  return (
    <>
      Start index: {startIndex}. Index in batch: {indexInBatch}. Items in batch: {itemsInBatch}.
    </>
  )
}

export default Success
