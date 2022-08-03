import never from 'never'
import getEntry from '../../rangeMap/getEntry/getEntry'
import loadRange from '../loadRange/loadRange'
import Input from './Input'

const retry = <T>({ rangeLoader, index }: Input<T>): void => {
  const { range } = getEntry({ rangeMap: rangeLoader.loadPromises, index }).getValue() ?? never()
  loadRange({ rangeLoader, range })
}

export default retry
