import { FC } from 'react'
import Observe from './Observe'
type RenderFn<P = {}> = (observe: Observe, props: P) => ReturnType<FC>

export default RenderFn
