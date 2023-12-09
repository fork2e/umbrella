import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

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
    link: 'https://www.google.com',
    children: 'Button',
    white: false,
    withIcon: false,
    iconPosition: "left",
    iconType: "about",
  },
};