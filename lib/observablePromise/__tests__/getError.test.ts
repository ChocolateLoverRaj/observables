import getError from '../getError'

test('not done', () => {
  expect(getError({ done: false, result: undefined })).toBeUndefined()
})

test('success', () => {
  expect(getError({
    done: true,
    result: { success: true, result: 'fetched result' }
  })).toBeUndefined()
})

test('error', () => {
  expect(getError({
    done: true,
    result: { success: false, result: 'error' }
  })).toBe('error')
})
