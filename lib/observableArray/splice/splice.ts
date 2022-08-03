import emit from '../../emit/emit'
import Event from '../Event'
import EventType from '../EventType'
import Input from './Input'

const splice = <T>({ observableArray: { array, listeners }, spliceData }: Input<T>): void => {
  array.splice(spliceData.start, spliceData.deleteCount, ...spliceData.insert)
  const event: Event<T> = {
    type: EventType.SPLICE,
    data: spliceData
  }
  emit({
    forEach: Set.prototype.forEach.bind(listeners),
    inputs: [event]
  })
}

export default splice
