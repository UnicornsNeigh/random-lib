import React, { useState } from "react";
import { initializeConnector } from "@web3-react/core";
import { MetaMask } from "@web3-react/metamask";
import WalletOption from "./WalletOption";

export const [metaMask, hooks] = initializeConnector<MetaMask>(
  (actions) => new MetaMask({ actions })
);

const Metamask = () => {
  const [text, setText] = useState("MetaMask");

  return (
    <WalletOption
      onClick={() => {
        metaMask
          .activate()
          .then((success) => {
            console.log(success);
          })
          .catch((err) => {
            if (err.name === "NoMetaMaskError") {
              setText("Please Install Metamask");
            }
          });
      }}
      text={text}
    />
  );
};

export default Metamask;
