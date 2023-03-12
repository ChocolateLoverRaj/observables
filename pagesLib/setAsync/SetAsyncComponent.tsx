import { useState } from 'react'
import create from '../../lib/setAsync/create'
import reactObserver from '../../lib/reactObserver/reactObserver'
import set from '../../lib/setAsync/set/set'
import wait from 'wait'
import getSetPromise from '../../lib/setAsync/getSetPromise'
import useConstant from 'use-constant'

const SetAsyncComponent = reactObserver(observe => {
  const setAsync = useConstant(() => create())
  const [value, setValue] = useState('Default value')
  const savePromiseData = observe(getSetPromise(setAsync))
  const [savedValue, setSavedValue] = useState('Default value')
  console.log(savedValue)

  return (
    <>
      <input
        value={value}
        onChange={({ target: { value } }) => {
          setValue(value)
          set({
            setAsync,
            setFn: async () => {
              console.log('new value', value)
              await wait(2000)
              setSavedValue(value)
            }
          })
        }}
      />
      {savePromiseData.done
        ? savePromiseData.result.success
          ? 'Saved'
          : 'Error saving'
        : 'Saving'}
      <br />
      Saved value: {savedValue}
    </>
  )
})

export default SetAsyncComponent
