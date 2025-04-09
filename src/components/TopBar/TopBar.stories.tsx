import type { Meta, StoryObj } from '@storybook/react';
import { TopBar } from './TopBar';

const meta = {
  title: 'Components/TopBar',
  component: TopBar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TopBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    spaceTitle: 'PERSONAL',
    onAddClick: () => console.log('Add clicked'),
  },
};

export const DifferentTitle: Story = {
  args: {
    spaceTitle: 'WORK',
    onAddClick: () => console.log('Add clicked'),
  },
}; 