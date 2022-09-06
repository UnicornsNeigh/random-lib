import React from "react";
import { CoinbaseWallet } from "@web3-react/coinbase-wallet";
import { initializeConnector } from "@web3-react/core";
import WalletOption from "./WalletOption";
import coinbaseIcon from "../../assets/coinbaseWalletIcon.svg";

const [coinbaseWallet] = initializeConnector<CoinbaseWallet>((actions) => {
  return new CoinbaseWallet({
    actions,
    options: {
      url: "https://mainnet.infura.io/v3/",
      // @ts-ignore
      appName: "web3-react",
    },
  });
});

const CoinbaseWalletOption = () => (
  <WalletOption
    text="Coinbase Wallet"
    onClick={() => coinbaseWallet.activate()}
    src={coinbaseIcon}
  />
);

export default CoinbaseWalletOption;
