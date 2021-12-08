import { Story, Meta } from '@storybook/react';
import { DesignReact, DesignReactProps } from './design-react';

export default {
  component: DesignReact,
  title: 'DesignReact',
} as Meta;

const Template: Story<DesignReactProps> = (args) => <DesignReact {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
