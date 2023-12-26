import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './index';

const meta = {
  title: 'Umbrella/Radio',
  parameters: {
    layout: 'centered',
  },
  component: Radio,
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotChecked: Story = {
  args: {
    children: 'Aligner à gauche',
    radioName: "myName",
    radioId: "myId",
  },
};