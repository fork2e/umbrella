import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './index';

const meta = {
  title: 'Umbrella/TextField',
  parameters: {
    layout: 'centered',
  },
  component: TextField,
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    textFieldId: "myId",
    label: "My label" 
  },
};
