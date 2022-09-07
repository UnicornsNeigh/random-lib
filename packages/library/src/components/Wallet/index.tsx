import React from "react";

import CoinbaseWallet from "./CoinbaseWallet";
import MetaMaskWallet from "./MetaMaskWallet";
import WalletConnectWallet from "./WalletConnectWallet";

const Wallet = () => {
  return (
    <div>
      <MetaMaskWallet />
      <CoinbaseWallet />
      <WalletConnectWallet />
    </div>
  );
};

export default Wallet;
