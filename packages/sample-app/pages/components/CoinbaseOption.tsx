import React from "react";
import { CoinbaseWallet } from "@web3-react/coinbase-wallet";
import { initializeConnector } from "@web3-react/core";

import WalletOption from "./WalletOption";

export const [coinbaseWallet, hooks] = initializeConnector<CoinbaseWallet>(
  (actions) => {
    return new CoinbaseWallet({
      actions,
      options: {
        url: "https://mainnet.infura.io/v3/",
        // @ts-ignore
        appName: "web3-react",
      },
    });
  }
);

const connect = async () => {
  try {
    // await coinbaseWalletConnection.connector.activate();
    coinbaseWallet.activate();
  } catch (err) {
    console.log("failed");
    console.log(err);
  }
};

const Coinbase = () => {
  //   const isActive = coinbaseWalletConnection.hooks.useIsActive();



  //   useEffect(() => {
  //     // coinbaseWalletConnection.connectEagerly().catch(() => {
  //     //     console.debug('Failed to connect eagerly to coinbase wallet')
  //     //   })

  //     // coinbaseWalletConnection.connector?.connectEagerly()

  //     if (coinbaseWalletConnection.connector.connectEagerly) {
  //       coinbaseWalletConnection.connector.connectEagerly()?.catch(() => {
  //         console.debug("Failed to connect eagerly to coinbase wallet");
  //       });
  //     }
  //   }, []);

  return (
    <WalletOption
      onClick={() => coinbaseWallet.activate()}
      text="Coinbase"
    />
  );
};

export default Coinbase;
