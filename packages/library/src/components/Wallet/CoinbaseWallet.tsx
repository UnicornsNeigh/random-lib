import React from "react";
import { CoinbaseWallet } from "@web3-react/coinbase-wallet";
import { initializeConnector } from "@web3-react/core";
import WalletOption from "./WalletOption";
import coinbaseIcon from "../../assets/coinbaseWalletIcon.svg";

import { RPC_URL } from "../../constants";
import { coinbaseConnection } from "../../constants/connectors";

// [coinbaseWallet, coinbaseHooks]
const CoinbaseWalletOption = () => {
  const [coinbaseWallet] = coinbaseConnection;

  return (
    <WalletOption
      text="Coinbase Wallet"
      onClick={() => coinbaseWallet.activate()}
      src={coinbaseIcon}
    />
  );
};

export default CoinbaseWalletOption;
