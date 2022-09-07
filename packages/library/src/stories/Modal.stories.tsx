import React, { useMemo, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Modal } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const buttonStyle = {
  backgroundColor: "#1fa7fd",
  color: "white",
  display: "block",
  cursor: "pointer",
  padding: "10px 30px",
  outline: "none",
  border: "none",
  borderRadius: 15,
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: 20,
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = () => {
  const [isOpen, setOpen] = useState(false);
  const url = window.location.href;
  const showModal = useMemo(() => {
    console.log(url);
    return url.includes("modal");
  }, [url]);

  return (
    <div>
      <button style={buttonStyle} onClick={() => setOpen(!isOpen)}>
        Toggle
      </button>
      <Modal isOpen={isOpen && showModal} close={() => setOpen(false)} />
    </div>
  );
};

export const WalletModal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   primary: true,
//   label: "Button",
// };
