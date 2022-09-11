import { CoinbaseWallet } from "@web3-react/coinbase-wallet";
import { MetaMask } from "@web3-react/metamask";
import { initializeConnector } from "@web3-react/core";
import { WalletConnect } from "@web3-react/walletconnect";

export const coinbaseConnector = initializeConnector<CoinbaseWallet>(
  (actions) => {
    return new CoinbaseWallet({
      actions,
      options: {
        url: process.env.REACT_APP_RPC_URL || "https://mainnet.infura.io/v3/",
        appName: "web3-react",
      },
    });
  }
);

export const metaMaskConnector = initializeConnector<MetaMask>(
  (actions) => new MetaMask({ actions })
);

export const walletConnectConnector = initializeConnector<WalletConnect>(
  (actions) =>
    new WalletConnect({
      actions,
      options: {
        rpc: {
          1: process.env.REACT_APP_RPC_URL || "https://mainnet.infura.io/v3/",
        },
      },
    })
);

const connections = {
  coinbaseConnector,
  metaMaskConnector,
  walletConnectConnector,
};

export default connections;
