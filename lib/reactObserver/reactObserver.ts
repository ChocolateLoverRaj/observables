import RenderFn from './RenderFn'
import { FC, useRef } from 'react'
import Observable from '../Observable'
import diff from 'set-diffs'
import useRerender from '@utilityjs/use-force-rerender'

const reactObserver = <P = {}>(renderFn: RenderFn<P>): FC<P> => (props) => {
  const rerender = useRerender()
  const previousObservablesRef = useRef(new Set<Observable<unknown>>())
  const observables = new Set<Observable<unknown>>()
  const returnValue = renderFn((observable) => {
    observables.add(observable)
    return observable.getValue()
  }, props)

  const { add, remove } = diff(previousObservablesRef.current, observables)
  add.forEach(({ addRemove: { add } }) => {
    add(rerender)
  })
  remove.forEach(({ addRemove: { remove } }) => {
    remove(rerender)
  })
  previousObservablesRef.current = observables

  return returnValue
}

export default reactObserver
