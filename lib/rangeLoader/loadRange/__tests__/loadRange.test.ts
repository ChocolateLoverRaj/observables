import get from '../../../observableValue/get'
import create from '../../create'
import getElement from '../../getElement/getElement'
import getLength from '../../getLength'
import loadRange from '../loadRange'

test('no more results', async () => {
  const rangeLoader = create(async ({ start, length }) => {
    if (start === 0) {
      return ['a', 'b']
    } else {
      return await new Promise(() => {})
    }
  })
  loadRange({ rangeLoader, range: { start: 3, length: 3 } })
  loadRange({ rangeLoader, range: { start: 0, length: 3 } })
  await getElement({ rangeLoader, index: 0 }).getValue().value
  expect(getLength(rangeLoader).getValue()).toBe(2)
  expect(get(rangeLoader.ended)).toBe(true)
})
