import React from "react";
import { CoinbaseWallet } from "@web3-react/coinbase-wallet";
import { initializeConnector } from "@web3-react/core";
import WalletOption from "./WalletOption";
import coinbaseIcon from "../../assets/coinbaseWalletIcon.svg";

import { RPC_URL } from "../../constants";
import { coinbaseWallet } from "../../constants/connectors";

const CoinbaseWalletOption = () => (
  <WalletOption
    text="Coinbase Wallet"
    onClick={() => coinbaseWallet.activate()}
    src={coinbaseIcon}
  />
);

export default CoinbaseWalletOption;
