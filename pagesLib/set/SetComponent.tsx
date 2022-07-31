import createNormal from '../../lib/observableSet/createNormal'
import AddValue from './AddValue'
import Values from './Values'
import { FC } from 'react'

const observableSet = createNormal<string>(
  new Set(['Apple', 'Banana', 'Strawberry'])
)

const SetComponent: FC = (observe) => {
  return (
    <>
      <Values observableSet={observableSet} />
      <AddValue observableSet={observableSet} />
    </>
  )
}

export default SetComponent
