import type { Meta, StoryObj } from '@storybook/react';
import { BottomBar } from './BottomBar';


const meta = {
  title: 'Components/BottomBar',
  component: BottomBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onSearchClick: { action: 'search clicked' },
  },
} satisfies Meta<typeof BottomBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
   
  },
};


export const WithSearchHandler: Story = {
  args: {
    onSearchClick: () => console.log('Search clicked'),
  },
}; 