import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import ScrollResultsLoaderComponent from '../pagesLib/scrollResultsLoader/ScrollResultsLoader'

const componentMeta: ComponentMeta<typeof ScrollResultsLoaderComponent> = {
  component: ScrollResultsLoaderComponent
}

export default componentMeta

const Template: ComponentStory<typeof ScrollResultsLoaderComponent> = args =>
  <ScrollResultsLoaderComponent {...args} />

export const ScrollResultsLoader = Template.bind({})
ScrollResultsLoader.args = {
  delay: 1000,
  succeed: true,
  itemsCount: 100,
  initialLoad: 1.5,
  scrollLoad: 1
}
