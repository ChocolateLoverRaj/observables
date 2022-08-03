import Events from './Events'

type Event<T> = {
  [K in keyof Events<T>]: {
    type: K
    data: Events<T>[K]
  }
}[keyof Events<T>]

export default Event
