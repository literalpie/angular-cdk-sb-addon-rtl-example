// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import Button from "./button.component";
import { StorybookDirectionalityModule } from "../.storybook/directionality/storybook-directionality.module";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [
    moduleMetadata({
      declarations: [Button],
      imports: [StorybookDirectionalityModule],
    }),
  ],
} as Meta;

const Template: Story<Button> = (args: Button) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
