import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
// import { Div, Wallet } from "random123azaaaazdsf";
import Wallet from "./Wallet";
import CoinbaseOption from "./components/CoinbaseOption";
import Metamask from "./components/Metamask";
import Modal from "./components/Modal";

import { initializeConnector } from "@web3-react/core";
import { CoinbaseWallet } from "@web3-react/coinbase-wallet";
import { Web3ReactHooks, Web3ReactProvider } from "@web3-react/core";
// import { coinbaseWallet, coinbaseHooks } from "./components/CoinbaseOption";
import { connectors, WalletType } from "random123azaaaazdsf";

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const { coinbaseConnector, walletConnectConnector } = connectors;
  // const [coinbaseWallet, coinbaseHooks] = coinbaseConnector;
  console.log(connectors[WalletType.COINBASE]);
  // console.log(WalletType);

  return (
    <Web3ReactProvider connectors={connectors}>
      <Wallet />
    </Web3ReactProvider>
  );
};

export default Home;
