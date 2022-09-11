import React from "react";

import WalletOption from "./WalletOption";
import coinbaseIcon from "../../assets/coinbaseWalletIcon.svg";
import { coinbaseConnector } from "../../constants/connectors";

const CoinbaseWalletOption = () => {
  const [coinbaseWallet] = coinbaseConnector;

  return (
    <WalletOption
      text="Coinbase Wallet"
      onClick={() => coinbaseWallet.activate()}
      src={coinbaseIcon}
    />
  );
};

export default CoinbaseWalletOption;
