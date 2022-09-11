import React, { useEffect } from "react";

import WalletOption from "./WalletOption";
import coinbaseIcon from "../../assets/coinbaseWalletIcon.svg";
import { coinbaseConnector } from "../../constants/connectors";

// [coinbaseWallet, coinbaseHooks]
const CoinbaseWalletOption = () => {
  const [coinbaseWallet] = coinbaseConnector;

  useEffect(() => {
    coinbaseWallet
      .connectEagerly()
      .then((success) => {
        console.log("success");
        console.log(success);
      })
      .catch((err) => {
        console.log("error");
        console.log(err);
      });
  }, [coinbaseWallet]);

  return (
    <WalletOption
      text="Coinbase Wallet"
      onClick={() => coinbaseWallet.activate()}
      src={coinbaseIcon}
    />
  );
};

export default CoinbaseWalletOption;
