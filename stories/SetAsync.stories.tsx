import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import SetAsyncComponent from '../pagesLib/setAsync/SetAsyncComponent'

const componentMeta: ComponentMeta<typeof SetAsyncComponent> = {
  component: SetAsyncComponent
}

export default componentMeta

export const SetAsync: ComponentStory<typeof SetAsyncComponent> = () => <SetAsyncComponent />
