import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import AsyncActionComponent from '../pagesLib/asyncAction/AsyncAction'

const componentMeta: ComponentMeta<typeof AsyncActionComponent> = {
  component: AsyncActionComponent
}

export default componentMeta

const Template: ComponentStory<typeof AsyncActionComponent> = args =>
  <AsyncActionComponent {...args} />

export const AsyncAction = Template.bind({})
AsyncAction.args = {
  delay: 1000
}
