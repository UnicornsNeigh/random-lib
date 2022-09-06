import React from "react";

import CoinbaseWallet from "./CoinbaseWallet";
import MetaMaskWallet from "./MetamaskWallet";
import WalletConnectWallet from "./WalletConnectWallet";

const Wallet = () => {
  return (
    <div>
      <CoinbaseWallet />
      <MetaMaskWallet />
      <WalletConnectWallet />
    </div>
  );
};

export default Wallet;
