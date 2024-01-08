import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> =  (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Primary Button",
  type: "primary",
  customClasses: "px-4 py-2",
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "Secondary Button",
  type: "secondary",
  customClasses: "px-6 py-3",
};
