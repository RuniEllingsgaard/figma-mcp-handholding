import type { Meta, StoryObj } from '@storybook/react';
import TextFormatControl, { TextFormat } from './TextFormatControl';

const meta = {
  title: 'Components/TextFormatControl',
  component: TextFormatControl,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextFormatControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    activeFormat: null,
    onFormatChange: (format: TextFormat) => {
      console.log('Format changed to:', format);
    },
  },
};

export const WithBoldActive: Story = {
  args: {
    activeFormat: 'bold',
    onFormatChange: (format: TextFormat) => {
      console.log('Format changed to:', format);
    },
  },
};

export const WithItalicActive: Story = {
  args: {
    activeFormat: 'italic',
    onFormatChange: (format: TextFormat) => {
      console.log('Format changed to:', format);
    },
  },
};

export const WithUnderlineActive: Story = {
  args: {
    activeFormat: 'underline',
    onFormatChange: (format: TextFormat) => {
      console.log('Format changed to:', format);
    },
  },
}; 