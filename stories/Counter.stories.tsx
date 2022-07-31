import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import _Counter from '../pagesLib/Counter'

const componentMeta: ComponentMeta<typeof _Counter> = {
  component: _Counter
}

export default componentMeta

export const Counter: ComponentStory<typeof _Counter> = () => <_Counter />
