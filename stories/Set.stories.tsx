import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import SetComponent from '../pagesLib/set/SetComponent'

const componentMeta: ComponentMeta<typeof SetComponent> = {
  component: SetComponent
}

export default componentMeta

export const Set: ComponentStory<typeof SetComponent> = () => <SetComponent />
