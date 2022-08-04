import { Context as IContext, createContext } from 'react'
import RangeLoader from '../../lib/rangeLoader/RangeLoader'
import LoadedItem from './LoadedItem'

const Context = (createContext as any)() as IContext<RangeLoader<LoadedItem>>

export default Context
