import React, { useEffect } from "react";

import WalletOption from "./WalletOption";
import walletConnectIcon from "../../assets/walletConnectIcon.svg";
import { walletConnectConnector } from "../../constants/connectors";

const WalletConnectOption = () => {
  const [walletConnect] = walletConnectConnector;

  useEffect(() => {
    walletConnect
      .connectEagerly()
      .then((success) => {
        console.log("connected");
        console.log(success);
      })
      .catch((err) => {
        console.log("error");
        console.log(err);
      });
  }, [walletConnect]);

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
