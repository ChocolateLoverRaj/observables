import get from '../../../observableValue/get'
import create from '../../create'
import set from '../set'

test('nothing setting', () => {
  const setAsync = create<any>()
  const setFn = jest.fn(async () => {})
  set({
    setAsync,
    setFn
  })
  expect(setFn).toBeCalled()
  expect(get(setAsync.setting)).not.toBe(undefined)
})

test('queue', async () => {
  const setAsync = create<any>()
  const setFn = jest.fn(async () => {})
  set({
    setAsync,
    setFn
  })
  set({
    setAsync,
    setFn
  })
  expect(setFn).toBeCalledTimes(1)
  await setFn.mock.results[0].value
  expect(setFn).toBeCalledTimes(2)
})

test('queue gets emptied', async () => {
  const setAsync = create<any>()
  const setFn = jest.fn(async () => {})
  set({
    setAsync,
    setFn
  })
  set({
    setAsync,
    setFn
  })
  expect(setFn).toBeCalledTimes(1)
  await setFn.mock.results[0].value
  expect(setFn).toBeCalledTimes(2)
  set({
    setAsync,
    setFn
  })
  expect(setFn).toBeCalledTimes(2)
  await setFn.mock.results[0].value
  expect(setFn).toBeCalledTimes(3)
})

test('queued function gets overwritten', async () => {
  const setAsync = create<any>()
  const setFn0 = jest.fn(async () => {})
  const setFn1 = jest.fn(async () => {})
  set({
    setAsync,
    setFn: setFn0
  })
  set({
    setAsync,
    setFn: setFn0
  })
  set({
    setAsync,
    setFn: setFn1
  })
  expect(setFn0).toBeCalledTimes(1)
  await setFn0.mock.results[0].value
  expect(setFn0).toBeCalledTimes(1)
  expect(setFn1).toBeCalledTimes(1)
})

test('2 times', async () => {
  const setAsync = create<any>()
  const setFn0 = jest.fn(async () => {})
  const setFn1 = jest.fn(async () => {})
  set({
    setAsync,
    setFn: setFn0
  })
  await setFn0.mock.results[0].value
  set({
    setAsync,
    setFn: setFn1
  })
  expect(setFn0).toBeCalled()
  expect(setFn1).toBeCalled()
})
