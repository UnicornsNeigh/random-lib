import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { EnsProfileImage } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/ENS",
  component: EnsProfileImage,
  argTypes: {
    rpcProvider: {
      control: "text",
    },
    ens: {
      control: "text",
    },
    size: {
      control: "number",
      defaultValue: 24,
    },
  },
} as ComponentMeta<typeof EnsProfileImage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EnsProfileImage> = (args) => {
  const size = args.size ?? 24;

  return (
    <div>
      <EnsProfileImage
        rpcProvider={args.rpcProvider?.trim()}
        ens={args.ens?.trim()}
        size={size > 0 ? size : 24}
      />
    </div>
  );
};

export const EnsProfilePicture = Template.bind({});
