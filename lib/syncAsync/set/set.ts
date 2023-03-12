import Input from './Input'
import setSetAsync from '../../setAsync/set/set'
import setObservableValue from '../../observableValue/set'

const set = <T>({
  newData,
  syncAsync: {
    setAsync,
    save,
    settingData,
    set
  }
}: Input<T>): void => {
  setObservableValue(settingData, newData)
  setSetAsync({
    setAsync,
    setFn: async () => {
      console.log('save', newData)
      await save(newData)
      set(newData)
      // FIXME: Shouldn't use setAsync internal data
      if (setAsync.queued === undefined) {
        setObservableValue(settingData, undefined)
      }
      return newData
    }
  })
}

export default set
