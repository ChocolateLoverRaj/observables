import { FC, ForwardedRef } from 'react'
import Observe from './Observe'

type RenderFn<Props = {}, Ref = never> = (
  observe: Observe,
  props: Props,
  ref: ForwardedRef<Ref>
) => ReturnType<FC>

export default RenderFn
