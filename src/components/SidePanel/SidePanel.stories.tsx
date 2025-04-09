import type { Meta, StoryObj } from '@storybook/react';
import { SidePanel } from './SidePanel';

const meta = {
  title: 'Components/SidePanel',
  component: SidePanel,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SidePanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    spaceTitle: 'PERSONAL',
    documentItems: [
      'Journal',
      'Birthday party checklist',
      'People i miss',
      'Letters I\'ll never send',
      'Book reviews'
    ],
    onAddSpace: () => console.log('Add space clicked'),
    onSearch: () => console.log('Search clicked'),
    onProfileClick: () => console.log('Profile clicked'),
  },
}; 