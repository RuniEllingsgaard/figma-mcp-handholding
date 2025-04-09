import type { Meta, StoryObj } from '@storybook/react';
import DocumentBottom from './DocumentBottom';

const meta: Meta<typeof DocumentBottom> = {
  title: 'Editor/DocumentBottom',
  component: DocumentBottom,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DocumentBottom>;

export const Default: Story = {
  args: {
    onSave: () => console.log('Save clicked'),
    onAlignLeft: () => console.log('Align left clicked'),
    onAlignRight: () => console.log('Align right clicked'),
  },
};

export const WithActions: Story = {
  args: {
    onSave: () => alert('Document saved!'),
    onAlignLeft: () => alert('Text aligned to left!'),
    onAlignRight: () => alert('Text aligned to right!'),
  },
};

// Adding some context to show how it fits in a document-like container
export const InContext: Story = {
  args: {
    ...Default.args,
  },
  decorators: [
    (Story) => (
      <div style={{ 
        width: '800px', 
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '12px'
      }}>
        <Story />
      </div>
    ),
  ],
}; 