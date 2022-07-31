import { useState, FC } from 'react'
import add from '../../lib/observableSet/add'
import InternalProps from './InternalProps'

const AddValue: FC<InternalProps> = ({ observableSet }) => {
  const [str, setStr] = useState('')

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        add({ data: observableSet, value: str })
        setStr('')
      }}
    >
      <input value={str} onChange={({ target: { value } }) => setStr(value)} />
      <button type='submit'>Add Value</button>
    </form>
  )
}

export default AddValue
