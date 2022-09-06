import React, { useState } from "react";
import { initializeConnector } from "@web3-react/core";
import { MetaMask } from "@web3-react/metamask";
import WalletOption from "./WalletOption";
import metamaskicon from "../../assets/metamaskIcon.png";

export const [metaMask, hooks] = initializeConnector<MetaMask>(
  (actions) => new MetaMask({ actions })
);

const MetamaskOption = () => {
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
      src={metamaskicon}
    />
  );
};

export default MetamaskOption;
