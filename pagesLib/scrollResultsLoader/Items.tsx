import { ReactElement, useContext } from 'react'
import getElement from '../../lib/rangeLoader/getElement/getElement'
import getLength from '../../lib/rangeLoader/getLength'
import reactObserver from '../../lib/reactObserver/reactObserver'
import Context from '../loaderCommon/Context'
import Item from '../loaderCommon/item/Item'

const Items = reactObserver(observe => {
  const rangeLoader = useContext(Context)

  const arr: ReactElement[] = []
  for (let i = 0; i < observe(getLength(rangeLoader)); i++) {
    arr.push(<Item key={i} index={i} item={getElement({ rangeLoader, index: i })} />)
  }

  return (
    <ul style={{ margin: 0 }}>
      {arr}
    </ul>
  )
})

export default Items
