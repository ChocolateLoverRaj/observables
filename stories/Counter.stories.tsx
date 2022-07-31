import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import CounterComponent from '../pagesLib/Counter'

const componentMeta: ComponentMeta<typeof CounterComponent> = {
  component: CounterComponent
}

export default componentMeta

export const Counter: ComponentStory<typeof CounterComponent> = () => <CounterComponent />
