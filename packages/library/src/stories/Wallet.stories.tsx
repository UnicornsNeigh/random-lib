import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Wallet as WalletComponent } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/WalletOptions",
  component: WalletComponent,
} as ComponentMeta<typeof WalletComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof WalletComponent> = () => (
  <div style={{ width: 400, marginLeft: "auto", marginRight: "auto" }}>
    <WalletComponent />
  </div>
);

export const Wallet = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   primary: true,
//   label: "Button",
// };
