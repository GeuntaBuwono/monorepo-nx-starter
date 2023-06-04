import type { Meta, StoryFn } from '@storybook/react';

import { Button } from './button';

const Story: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
};
export default Story;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
