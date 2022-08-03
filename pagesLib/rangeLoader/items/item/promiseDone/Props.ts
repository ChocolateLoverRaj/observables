import FailableResult from '../../../../../lib/failableResult/FailableResult'
import LoadedItem from '../../../LoadedItem'
import CommonProps from '../CommonProps'

interface Props extends CommonProps {
  failableResult: FailableResult<LoadedItem>
}

export default Props
