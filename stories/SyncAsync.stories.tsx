import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import SyncAsyncComponent from '../pagesLib/syncAsync/SyncAsyncComponent'
import SyncAsyncWithDexie from '../pagesLib/syncAsync/SyncAsyncWithDexie'

const componentMeta: ComponentMeta<typeof SyncAsyncComponent> = {
  component: SyncAsyncComponent
}

export default componentMeta

export const SyncAsync: ComponentStory<typeof SyncAsyncComponent> = () => <SyncAsyncComponent />
export const WithDexieJS: ComponentStory<typeof SyncAsyncWithDexie> = () => <SyncAsyncWithDexie />
