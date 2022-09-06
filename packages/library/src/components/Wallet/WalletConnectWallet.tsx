import React from "react";
import { initializeConnector } from "@web3-react/core";
import { WalletConnect } from "@web3-react/walletconnect";
import WalletOption from "./WalletOption";
import walletConnectIcon from "../../assets/walletConnectIcon.svg";

export const [walletConnect, hooks] = initializeConnector<WalletConnect>(
  (actions) =>
    new WalletConnect({
      actions,
      options: {
        rpc: {
          1: "https://mainnet.infura.io/v3/",
        },
      },
    })
);

const WalletConnectOption = () => {
  return (
    <WalletOption
      onClick={() => {
        walletConnect
          .activate()
          .then((success) => {
            console.log(success);
          })
          .catch((err) => {
            console.log("failed");
            console.log(err);
          });
      }}
      text="WalletConnect"
      src={walletConnectIcon}
    />
  );
};

export default WalletConnectOption;
