import Add from '../setFns/Add'

const add = <T>({
  data,
  value
}: Parameters<Add<Set<T>, T>>[0]): ReturnType<Add<Set<T>, T>> => {
  data.add(value)
}

export default add
