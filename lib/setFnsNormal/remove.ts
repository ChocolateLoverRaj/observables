import Remove from '../setFns/Remove'

const remove = <T>({
  data,
  value
}: Parameters<Remove<Set<T>, T>>[0]): ReturnType<Remove<Set<T>, T>> => {
  data.delete(value)
}

export default remove
