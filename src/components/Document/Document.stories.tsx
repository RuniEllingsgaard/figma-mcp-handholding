import type { Meta, StoryObj } from '@storybook/react';
import { Document } from './Document';

const meta = {
  title: 'Components/Document',
  component: Document,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Document>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Write anything...',
    content: '',
    onSave: () => console.log('Save clicked'),
    onChange: (content) => console.log('Content changed:', content),
  },
};

export const WithContent: Story = {
  args: {
    placeholder: 'Write anything...',
    content: 'This is some example content in the document.',
    onSave: () => console.log('Save clicked'),
    onChange: (content) => console.log('Content changed:', content),
  },
}; 