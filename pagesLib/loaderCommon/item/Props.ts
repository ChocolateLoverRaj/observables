import ObservablePromise from '../../../lib/observablePromise/ObservablePromise'
import LoadedItem from '../LoadedItem'
import CommonProps from './CommonProps'

interface Props extends CommonProps {
  item: ObservablePromise<LoadedItem | undefined>
}

export default Props
