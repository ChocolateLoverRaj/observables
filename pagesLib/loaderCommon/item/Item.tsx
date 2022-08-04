import reactObserver from '../../../lib/reactObserver/reactObserver'
import PromiseDone from './promiseDone/PromiseDone'
import Props from './Props'

const Item = reactObserver<Props>((observe, { item, index }) => {
  const promiseData = observe(item)

  return (
    <li>
      {promiseData.done
        ? <PromiseDone failableResult={promiseData.result} index={index} />
        : 'Loading'}
    </li>
  )
})

export default Item
