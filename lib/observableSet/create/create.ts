import ObservableSet from '../ObservableSet'
import Input from './Input'

const create = <T, SetData>({
  setData,
  setFns
}: Input<T, SetData>): ObservableSet<T, SetData> => ({
    data: {
      set: setData,
      listeners: new Set()
    },
    setFns
  })

export default create
