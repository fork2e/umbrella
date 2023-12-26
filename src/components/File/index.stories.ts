import type { Meta, StoryObj } from '@storybook/react';
import { File } from './index';

const meta = {
  title: 'Umbrella/File',
  parameters: {
    layout: 'centered',
  },
  component: File,
} satisfies Meta<typeof File>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    inputName: "file",
    inputId: "file",
    column: false,
    white: false,
    children: "Choisir un fichier"
  },
};
