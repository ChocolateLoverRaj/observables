import create from '../../../observableMap/create'
import testHelper from '../../testHelper'
import createObservable from '../createObservable'

testHelper(() => {
  const observableMap = create<any, any>()
  const getOrSetData = createObservable({ observableMap, getDefault: () => 'default' })
  return getOrSetData
})
