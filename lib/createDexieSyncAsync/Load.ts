/**
 * Follow the rules for the
 * [Dexie `liveQuery` function](https://dexie.org/docs/liveQuery()#rules-for-the-querier-function)
 */
type Load<T> = () => Promise<T>

export default Load
