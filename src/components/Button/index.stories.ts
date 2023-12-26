import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './index';

const meta = {
  title: 'Umbrella/Button',
  parameters: {
    layout: 'centered',
  },
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
    white: false,
    withIcon: false,
    fullWidth: false,
    iconPosition: "left",
    iconType: "about",
  },
};
