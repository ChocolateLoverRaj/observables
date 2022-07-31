import ForEachCallback from './ForEachCallback'

type ForEach<ForEachData, ItemData> = (
  data: ForEachData,
  callback: ForEachCallback<ItemData>
) => void

export default ForEach
