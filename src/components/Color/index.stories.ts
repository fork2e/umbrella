import type { Meta, StoryObj } from '@storybook/react';
import { Color } from './index';

const meta = {
  title: 'Umbrella/Color',
  parameters: {
    layout: 'centered',
  },
  component: Color,
} satisfies Meta<typeof Color>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    inputName: "colorName",
    inputId: "colorId",
    label: "Choisissez une couleur"
  }
};