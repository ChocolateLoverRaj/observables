import Has from '../setFns/Has'

const has = <T>({
  data,
  value
}: Parameters<Has<Set<T>, T>>[0]): ReturnType<Has<Set<T>, T>> =>
    data.has(value)

export default has
