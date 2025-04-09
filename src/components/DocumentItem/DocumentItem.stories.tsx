import type { Meta, StoryObj } from '@storybook/react';
import { DocumentItem } from './DocumentItem';

const meta = {
  title: 'Components/DocumentItem',
  component: DocumentItem,
  parameters: {
    layout: 'none',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DocumentItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InitiallyActive: Story = {
  args: {
    initialActive: true,
    title: 'Journal',
    onActiveChange: (isActive) => console.log('Active state changed to:', isActive),
  },
};

export const InitiallyPassive: Story = {
  args: {
    initialActive: false,
    title: 'Journal',
    onActiveChange: (isActive) => console.log('Active state changed to:', isActive),
  },
}; 