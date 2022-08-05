import createNormal from '../createNormal'
import testHelper from '../../testHelper'

testHelper(() => {
  const map = new Map()
  const mapGetOrSet = createNormal({ map, getDefault: () => 'default' })
  return mapGetOrSet
})
