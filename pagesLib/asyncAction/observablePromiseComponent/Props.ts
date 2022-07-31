import ObservablePromise from '../../../lib/observablePromise/ObservablePromise'

interface Props {
  observablePromise: ObservablePromise<number>
  retry: () => void
}

export default Props
