import { DocumentTag } from './DocumentTag';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/DocumentTag',
  component: DocumentTag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DocumentTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'PERSONAL',
    hasIcon: true,
  },
};

export const WithoutIcon: Story = {
  args: {
    label: 'PERSONAL',
    hasIcon: false,
  },
};

export const CustomLabel: Story = {
  args: {
    label: 'WORK',
    hasIcon: true,
  },
}; 