import getSuccessResult from '../getSuccessResult'

test('not done', () => {
  expect(getSuccessResult({ done: false, result: undefined })).toBeUndefined()
})

test('success', () => {
  expect(getSuccessResult({
    done: true,
    result: { success: true, result: 'answer' }
  })).toBe('answer')
})

test('error', () => {
  expect(getSuccessResult({
    done: true,
    result: { success: false, result: 'error' }
  })).toBeUndefined()
})
