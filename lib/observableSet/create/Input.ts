import ObservableSet from '../ObservableSet'

interface Input<T, SetData> {
  setFns: ObservableSet<T, SetData>['setFns']
  setData: SetData
}

export default Input
