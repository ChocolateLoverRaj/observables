import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import SyncAsyncWithDexie from '../pagesLib/syncAsync/SyncAsyncWithDexie'

const componentMeta: ComponentMeta<typeof SyncAsyncWithDexie> = {
  component: SyncAsyncWithDexie
}

export default componentMeta

export const SyncAsync: ComponentStory<typeof SyncAsyncWithDexie> = () => <SyncAsyncWithDexie />
