interface Props {
  delay: number
  succeed: boolean
  itemsCount: number
  /**
   * `how many items fit in the container * this multiplier` will be the initial load amount.
   * Must be >=1 so that it's scrollable at the start.
   */
  initialLoad: number
  /**
   * How many items to load at once when scrolling. Fraction of how many items fit in container.
   */
  scrollLoad: number
}

export default Props
