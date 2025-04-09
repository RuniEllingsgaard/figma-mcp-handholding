import type { Meta, StoryObj } from '@storybook/react';
import { TextColorButton } from './TextColorButton';

const meta = {
  title: 'Components/TextColorButton',
  component: TextColorButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextColorButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Black: Story = {
  args: {
    color: '#000000',
  },
};

export const Red: Story = {
  args: {
    color: '#FF0000',
  },
};

export const Blue: Story = {
  args: {
    color: '#0000FF',
  },
};

export const WithCustomClassName: Story = {
  args: {
    color: '#000000',
    className: 'custom-class',
  },
}; 