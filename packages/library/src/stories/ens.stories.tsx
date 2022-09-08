import React, { useState, useEffect } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { EnsProfileImage } from "../components";

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
let timer;

const Template: ComponentStory<typeof EnsProfileImage> = (args) => {
  const size = args.size ?? 24;
  const [ensName, setEnsName] = useState(args.ens?.trim());
  process.env.REACT_APP_RPC_URL = args.rpcProvider?.trim();

  // this is debounced to prevent unecessary calls
  useEffect(() => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      setEnsName(args.ens?.trim());
    }, 1000);
  }, [args.ens?.trim()]);

  return (
    <div>
      <EnsProfileImage ens={ensName} size={size > 0 ? size : 24} />
    </div>
  );
};

export const EnsProfilePicture = Template.bind({});
