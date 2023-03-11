import Input from './Input'
import setSetAsync from '../../setAsync/set/set'
import setObservableValue from '../../observableValue/set'

const set = <T>({
  newData,
  syncAsync: {
    setAsync,
    save,
    settingData
  }
}: Input<T>): void => {
  setObservableValue(settingData, newData)
  setSetAsync({
    setAsync,
    setFn: async () => {
      await save(newData)
      if (setAsync.queued === undefined) {
        console.log('Setting settingData to undefined after saving value:', newData)
        setObservableValue(settingData, undefined)
      }
      return newData
    }
  })
}

export default set
