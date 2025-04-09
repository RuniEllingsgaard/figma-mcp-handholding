import type { Meta, StoryObj } from '@storybook/react';
import IconButton from './IconButton';
import { IconName } from '../Icon/Icon';

const meta = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    iconName: {
      control: 'select',
      options: [
        'magnifying-glass',
        'plus',
        'trash',
        'link',
        'image-square',
        'text-underline',
        'text-italic',
        'text-bold',
        'caret-down',
        'text-t',
        'arrow-right',
        'arrow-left'
      ],
    },
    iconSize: {
      control: { type: 'number', min: 12, max: 32, step: 2 },
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconName: 'arrow-right',
    iconSize: 20,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    iconName: 'arrow-right',
    iconSize: 20,
    disabled: true,
  },
};

export const IconButtonGrid: Story = {
  args: {
    iconName: 'arrow-right',
    iconSize: 20,
  },
  render: () => {
    const icons: IconName[] = [
      'magnifying-glass',
      'plus',
      'trash',
      'link',
      'image-square',
      'text-underline',
      'text-italic',
      'text-bold',
      'caret-down',
      'text-t',
      'arrow-right',
      'arrow-left'
    ];

    return (
      <div className="grid grid-cols-4 gap-4 p-4">
        {icons.map((iconName) => (
          <div key={iconName} className="flex flex-col items-center gap-2 p-4 border rounded">
            <IconButton iconName={iconName} />
            <span className="text-sm text-gray-600">{iconName}</span>
          </div>
        ))}
      </div>
    );
  },
}; 