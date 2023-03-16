import RenderFn from './RenderFn'
import { forwardRef, useRef } from 'react'
import Observable from '../Observable'
import diff from 'set-diffs'
import useRerender from '@utilityjs/use-force-rerender'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const reactObserver = <Props = {}, Ref = never>(renderFn: RenderFn<Props, Ref>) =>
  forwardRef<Ref, Props>((props, ref) => {
    const rerender = useRerender()
    const previousObservablesRef = useRef(new Set<Observable<unknown>>())
    const observables = new Set<Observable<unknown>>()
    const returnValue = renderFn((observable) => {
      observables.add(observable)
      return observable.getValue()
    }, props, ref)

    const { add, remove } = diff(previousObservablesRef.current, observables)
    add.forEach(({ addRemove: { add } }) => {
      add(rerender)
    })
    remove.forEach(({ addRemove: { remove } }) => {
      remove(rerender)
    })
    previousObservablesRef.current = observables

    return returnValue
  })

export default reactObserver
