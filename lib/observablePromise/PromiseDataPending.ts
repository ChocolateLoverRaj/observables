interface PromiseDataPending<T> {
  done: false
  value: Promise<T>
}

export default PromiseDataPending
