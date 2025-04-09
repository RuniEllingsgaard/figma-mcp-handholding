import type { Meta, StoryObj } from '@storybook/react';
import TextSizeControl from './TextSizeControl';

const meta = {
  title: 'Components/TextSizeControl',
  component: TextSizeControl,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextSizeControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithOnChangeHandler: Story = {
  args: {
    onChange: (isExpanded) => {
      console.log('Text size control state changed:', isExpanded);
    },
  },
}; 