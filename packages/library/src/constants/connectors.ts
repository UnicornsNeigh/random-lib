import { CoinbaseWallet } from "@web3-react/coinbase-wallet";
import { initializeConnector } from "@web3-react/core";

export const connections = initializeConnector<CoinbaseWallet>((actions) => {
  return new CoinbaseWallet({
    actions,
    options: {
      url: process.env.REACT_APP_RPC_URL || "https://mainnet.infura.io/v3/",
      // @ts-ignore
      appName: "web3-react",
    },
  });
});

export default connections;
