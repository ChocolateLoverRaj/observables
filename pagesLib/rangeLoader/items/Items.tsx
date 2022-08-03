import { ReactElement, useContext } from 'react'
import getElement from '../../../lib/rangeLoader/getElement/getElement'
import getLength from '../../../lib/rangeLoader/getLength'
import reactObserver from '../../../lib/reactObserver/reactObserver'
import Context from '../Context'
import Item from './item/Item'

const Items = reactObserver(observe => {
  const rangeLoader = useContext(Context)
  const elements: ReactElement[] = []
  for (let i = 0; i < observe(getLength(rangeLoader)); i++) {
    elements.push(<Item key={i} item={getElement({ rangeLoader, index: i })} index={i} />)
  }

  return (
    <ul>
      {elements}
    </ul>
  )
})

export default Items
