import React from "react";
// import coinbaseWalletSvg from "./coinbase-wallet.svg";
import WalletOption from "./WalletOption";
import { useEffect } from "react";
import { coinbaseWallet, hooks } from "./connectors";

// <button onClick={() => connectCoinbase()}>connect coinbase</button>

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

  //   console.log(isActive);

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

  return <div>hi</div>;
  //   return (
  //     <WalletOption
  //       onClick={() => coinbaseWallet.activate()}
  //       text="Coinbase"
  //       src={coinbaseWalletSvg.src}
  //     />
  //   );
};

export default Coinbase;
