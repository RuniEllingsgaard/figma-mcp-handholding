import React from 'react';
import DocumentActions from './DocumentActions';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Components/DocumentActions',
    component: DocumentActions,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof DocumentActions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    
};