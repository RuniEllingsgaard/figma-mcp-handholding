import TextButton from './TextButton';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Components/TextButton',
    component: TextButton,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof TextButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        buttonLabel: 'Button', // This is where you define the default label
    },
};