import type { Meta, StoryObj } from '@storybook/react';
import { TagBar } from './TagBar';

// This needs to be the default export
const meta: Meta<typeof TagBar> = {
  title: 'Components/TagBar',
  component: TagBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}; 