import Input from './Input'

const getSortedInsertIndex = ({ getNumberAtIndex, length, number }: Input): number => {
  // From https://stackoverflow.com/a/21822316/11145447
  let low = 0
  let high = length

  while (low < high) {
    // This is same as Math.floor((low + high) / 2)
    const mid = (low + high) >>> 1
    if (getNumberAtIndex(mid) <= number) low = mid + 1
    else high = mid
  }
  return low
}

export default getSortedInsertIndex
