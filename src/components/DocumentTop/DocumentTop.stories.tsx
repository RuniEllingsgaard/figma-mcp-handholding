import type { Meta, StoryObj } from '@storybook/react';
import { DocumentTop } from './DocumentTop';

const meta: Meta<typeof DocumentTop> = {
  title: 'Components/DocumentTop',
  component: DocumentTop,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}; 