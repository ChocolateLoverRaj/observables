import { Fragment } from 'react'
import reactObserver from '../../lib/reactObserver/reactObserver'
import InternalProps from './InternalProps'
import getIterator from '../../lib/observableSet/getObservable/getIterator'
import remove from '../../lib/observableSet/remove'

const Values = reactObserver<InternalProps>((observe, { observableSet }) => {
  const valuesArr = [...observe(getIterator<string>(observableSet))]

  return (
    <>
      {valuesArr.length > 0
        ? valuesArr.map((value) => (
          <Fragment key={value}>
            <button
              onClick={() => {
                remove({
                  data: observableSet,
                  value
                })
              }}
            >
              X
            </button>{' '}
            {value}
            <br />
          </Fragment>))
        : <i>No Values</i>}
    </>
  )
})

export default Values
