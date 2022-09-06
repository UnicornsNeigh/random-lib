import React from "react";

import CoinbaseWallet from "./CoinbaseWallet";
import MetaMaskWallet from "./MetamaskWallet";

const Wallet = () => {
  return (
    <div>
      <CoinbaseWallet />
      <MetaMaskWallet />
    </div>
  );
};

export default Wallet;
