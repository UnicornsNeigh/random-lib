import React, { useMemo, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Modal } from "../components";

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

const Template: ComponentStory<typeof Modal> = () => {
  const [isOpen, setOpen] = useState(false);
  const url = window.location.href;
  const showModal = useMemo(() => {
    return url.includes("modal");
  }, [url]);

  process.env.bob = "hi";

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
