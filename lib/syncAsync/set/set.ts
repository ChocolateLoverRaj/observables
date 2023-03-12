import Input from './Input'
import setSetAsync from '../../setAsync/set/set'
import setObservableValue from '../../observableValue/set'

const set = <T>({
  newData,
  syncAsync: {
    setAsync,
    save,
    settingData,
    load
  }
}: Input<T>): void => {
  setObservableValue(settingData, newData)
  setSetAsync({
    setAsync,
    setFn: async () => {
      console.log('save', newData)
      await save(newData)
      if (setAsync.queued === undefined) {
        console.log('Should set settingData to undefined', load.getValue().getValue().result)
        // setObservableValue(settingData, undefined)
      }
      return newData
    }
  })
}

export default set
