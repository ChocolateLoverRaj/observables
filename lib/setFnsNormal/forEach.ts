import ForEach from '../setFns/ForEach'

const forEach = <T>({
  data,
  callback
}: Parameters<ForEach<Set<T>, T>>[0]): ReturnType<ForEach<Set<T>, T>> => {
  data.forEach(callback)
}

export default forEach
