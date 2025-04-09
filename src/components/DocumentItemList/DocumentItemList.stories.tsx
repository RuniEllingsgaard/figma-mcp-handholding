import type { Meta, StoryObj } from '@storybook/react';
import { DocumentItemList } from './DocumentItemList';

const meta = {
  title: 'Components/DocumentItemList',
  component: DocumentItemList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DocumentItemList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      'Journal',
      'Birthday party checklist',
      'People i miss',
      'Letters I\'ll never send',
      'Book reviews'
    ],
    initialActiveIndex: 0,
    onActiveItemChange: (index) => console.log('Active item changed to index:', index),
  },
}; 