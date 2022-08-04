import reactObserver from '../../lib/reactObserver/reactObserver'
import InfiniteScroll from 'react-infinite-scroll-component'
import useConstant from 'use-constant'
import create from '../../lib/rangeLoader/create'
import Props from './Props'
import LoadedItem from '../loaderCommon/LoadedItem'
import wait from 'wait'
import useLatest from '@react-hook/latest'
import Context from '../loaderCommon/Context'
import getObserve from '../../lib/observableValue/getObserve'
import Items from './Items'
import { useLayoutEffect, useRef } from 'react'
import set from '../../lib/observableValue/set'
import loadRange from '../../lib/rangeLoader/loadRange/loadRange'
import getLength from '../../lib/rangeLoader/getLength'
import { renderToStaticMarkup } from 'react-dom/server'
import never from 'never'

const ScrollResultsLoader = reactObserver<Props>(
  (observe, { delay, succeed, itemsCount, initialLoad, scrollLoad }) => {
    const delayRef = useLatest(delay)
    const succeedRef = useLatest(succeed)
    const itemsCountRef = useLatest(itemsCount)
    const containerRef = useRef<HTMLDivElement>(null)

    const rangeLoader = useConstant(() => create(async ({ start, length }) => {
      await wait(delayRef.current)
      if (!succeedRef.current) {
        throw new Error('Should not succeed')
      }
      const arr: LoadedItem[] = []
      for (let i = 0; i < Math.min(length, itemsCountRef.current - start); i++) {
        arr.push({
          startIndex: start,
          indexInBatch: i,
          itemsInBatch: length
        })
      }
      return arr
    }))

    // After it's ended, we can un-end it
    useLayoutEffect(() => {
      if (itemsCount > itemsCountRef.current) {
        set(rangeLoader.ended, false)
      }
    }, [itemsCount, itemsCountRef, rangeLoader.ended])

    const getSampleHeight = (): number => {
      const element = document.createElement('div')
      element.innerHTML = renderToStaticMarkup(<li>Sample Item</li>)
      element.style.visibility = 'hidden'
      element.style.position = 'fixed'
      document.body.appendChild(element)
      const height = element.offsetHeight
      document.body.removeChild(element)
      return height
    }
    const getFitCount = (): number => {
      const containerHeight = (containerRef.current ?? never()).offsetHeight
      const itemHeight = getSampleHeight()
      return containerHeight / itemHeight
    }

    // Load items
    useLayoutEffect(() => {
      const itemsToLoad = Math.ceil(getFitCount() * initialLoad)
      loadRange({
        rangeLoader,
        range: { start: 0, length: itemsToLoad }
      })
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
      <Context.Provider value={rangeLoader}>
        <div ref={containerRef} style={{ height: '100%' }}>
          <InfiniteScroll
            dataLength={observe(getLength(rangeLoader))}
            hasMore={!observe(getObserve(rangeLoader.ended))}
            loader={<>Loading</>}
            next={() => {
              const length = getLength(rangeLoader).getValue()
              loadRange({
                rangeLoader,
                range: { start: length, length: Math.ceil(getFitCount() * scrollLoad) }
              })
            }}
            endMessage='No more results'
          >
            <Items />
          </InfiniteScroll>
        </div>
      </Context.Provider>
    )
  })

export default ScrollResultsLoader
