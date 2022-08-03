import AddRemove from '../AddRemove'
import TriggerUpdate from './TriggerUpdate'

type GetInternalObserve = (triggerUpdate: TriggerUpdate) => AddRemove<undefined>

export default GetInternalObserve
