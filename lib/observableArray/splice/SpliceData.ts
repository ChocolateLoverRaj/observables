interface SpliceData<T> {
  start: number
  deleteCount: number
  insert: readonly T[]
}

export default SpliceData
