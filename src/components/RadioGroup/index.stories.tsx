import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from './index';
import { Radio } from '../Radio/index';

const meta = {
  title: 'Umbrella/RadioGroup',
  parameters: {
    layout: 'centered',
  },
  component: RadioGroup,
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children:
    <>
      <Radio radioId="aaa" radioName="aaa" radioValue='aaaa'>Alignement à gauche</Radio>
      <Radio radioId="bbb" radioName="aaa" radioValue='bbbb'>Alignement au centre</Radio>
      <Radio radioId="ccc" radioName="aaa" radioValue='cccc'>Alignement à droite</Radio>
    </>,
    title: "Radio Group 1"
  },
};