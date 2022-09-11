import React, { useState, useEffect } from "react";

import WalletOption from "./WalletOption";
import metamaskicon from "../../assets/metamaskIcon.png";
import { metaMaskConnector } from "../../constants/connectors";

const MetamaskOption = () => {
  const [text, setText] = useState("MetaMask");
  const [metaMask] = metaMaskConnector;

  useEffect(() => {
    if (!window.ethereum) {
      setText("Install MetaMask");
    }

    metaMask
      .connectEagerly()
      .then((success) => {
        console.log("success");
        console.log(success);
      })
      .catch((err) => {
        console.log("error");
        console.log(err);
      });
  }, [metaMask]);

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
              setText("Install MetaMask");
            }
          });
      }}
      text={text}
      src={metamaskicon}
    />
  );
};

export default MetamaskOption;
