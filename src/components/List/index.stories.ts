import type { Meta, StoryObj } from '@storybook/react';
import { List } from './index';

const meta = {
  title: 'Umbrella/List',
  parameters: {
    layout: 'centered',
  },
  component: List,
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: "file",
  },
};
