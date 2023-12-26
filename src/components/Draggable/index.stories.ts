import type { Meta, StoryObj } from '@storybook/react';
import { Draggable } from './index';

const meta = {
  title: 'Umbrella/Draggable',
  parameters: {
    layout: 'centered',
  },
  component: Draggable,
} satisfies Meta<typeof Draggable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: "Accueil",
    order: 3,
    toggleId: "idzer",
  }
};
