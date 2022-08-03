import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import RangeLoaderComponent from '../pagesLib/rangeLoader/RangeLoader'

const componentMeta: ComponentMeta<typeof RangeLoaderComponent> = {
  component: RangeLoaderComponent
}

export default componentMeta

const Template: ComponentStory<typeof RangeLoaderComponent> = args =>
  <RangeLoaderComponent {...args} />

export const RangeLoader = Template.bind({})
RangeLoader.args = {
  delay: 1000,
  itemsPerBatch: 5,
  succeed: true
}
