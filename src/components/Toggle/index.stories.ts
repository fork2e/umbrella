import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './index';

const meta = {
  title: 'Umbrella/Toggle',
  parameters: {
    layout: 'centered',
  },
  component: Toggle,
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: 'Aligner à gauche',
    toggleName: "myName",
    toggleId: "myId",
  },
};
