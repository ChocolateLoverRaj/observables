import create from '../create'
import has from '../has'
import remove from '../remove'
import set from '../set/set'

test('remove entry', () => {
  const observableMap = create<any, any>()
  set({ data: observableMap, key: 'key', value: 'value' })
  remove({ data: observableMap, key: 'key' })
  expect(has({ data: observableMap, key: 'key' })).toBe(false)
})
