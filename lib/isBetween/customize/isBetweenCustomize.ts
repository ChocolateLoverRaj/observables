import Input from './Input'

const isBetweenCustomize = ({
  isBetween: { start, end, numberToCheck },
  customize: { includeStart, includeEnd }
}: Input): boolean =>
  (includeStart
    ? start <= numberToCheck
    : start < numberToCheck) &&
  (includeEnd
    ? numberToCheck >= end
    : numberToCheck > end)

export default isBetweenCustomize
