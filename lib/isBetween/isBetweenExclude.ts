import isBetweenCustomize from './customize/isBetweenCustomize'
import Input from './Input'

const isBetweenExclude = (input: Input): boolean =>
  isBetweenCustomize({ isBetween: input, customize: { includeStart: false, includeEnd: false } })

export default isBetweenExclude
