import create from '../create'
import getSetPromise from '../getSetPromise'
import set from '../set/set'

test('observable', async () => {
  const setAsync = create<any>()
  const listener = jest.fn()
  const observable = getSetPromise(setAsync)
  observable.addRemove.add(listener)
  expect(observable.getValue()).toEqual({
    done: true,
    result: { success: true, result: undefined }
  })
  const setFn = jest.fn(async () => 'Result!')
  set({ setAsync, setFn })
  expect(listener).toBeCalled()
  listener.mockReset()
  expect(observable.getValue()).toEqual({
    done: false,
    result: undefined
  })
  await setFn.mock.results[0].value
  expect(listener).toBeCalled()
  expect(observable.getValue()).toEqual({
    done: true,
    result: { success: true, result: 'Result!' }
  })
  observable.addRemove.remove(listener)
})
