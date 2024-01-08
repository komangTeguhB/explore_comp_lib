import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Dropdown, DropdownProps } from "./Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    onSelect: { action: "selected" },
  },
} as Meta ;

const Template: StoryFn<React.FC<DropdownProps>> = (args) => <Dropdown {...args} />;

export const BasicDropdown = Template.bind({});
BasicDropdown.args = {
  options: ["Option 1", "Option 2", "Option 3"],
  containerClasses: "",
  buttonClasses: "border border-gray-500 px-4 py-2",
  menuClasses: "border border-gray-900 px-4",
  onSelect: (selectedOption) => console.log(`Selected option: ${selectedOption}`),
};
