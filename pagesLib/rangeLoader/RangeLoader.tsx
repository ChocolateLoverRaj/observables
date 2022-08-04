import getObserve from '../../lib/observableValue/getObserve'
import createRangeLoader from '../../lib/rangeLoader/create'
import reactObserver from '../../lib/reactObserver/reactObserver'
import useConstant from 'use-constant'
import LoadedItem from '../loaderCommon/LoadedItem'
import LoadMore from './loadMore/LoadMore'
import Items from './items/Items'
import Props from './Props'
import wait from 'wait'
import Context from '../loaderCommon/Context'
import useLatest from '@react-hook/latest'

const RangeLoader = reactObserver<Props>((observe, { delay, itemsPerBatch, succeed }) => {
  const delayRef = useLatest(delay)
  const succeedRef = useLatest(succeed)

  const rangeLoader = useConstant(() => createRangeLoader(async ({ start, length }) => {
    await wait(delayRef.current)
    if (!succeedRef.current) {
      throw new Error('Should not succeed')
    }
    const arr: LoadedItem[] = []
    for (let i = 0; i < length; i++) {
      arr.push({
        startIndex: start,
        indexInBatch: i,
        itemsInBatch: length
      })
    }
    return arr
  }))

  const ended = observe(getObserve(rangeLoader.ended))

  return (
    <Context.Provider value={rangeLoader}>
      <Items />
      {ended
        ? 'Loaded All Items'
        : <LoadMore itemsPerBatch={itemsPerBatch} />}
    </Context.Provider>
  )
})

export default RangeLoader
