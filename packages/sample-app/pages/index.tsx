import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Button, Div, Wallet } from "random123azaaaazdsf";
// import Wallet from "./Wallet";
import CoinbaseOption from "./components/CoinbaseOption";
import Metamask from "./components/Metamask";

const Home: NextPage = () => {
  return (
    <div>
      {/* hi */}
      {/* <Button label='hi' /> */}
      {/* <Div /> */}
      {/* <Wallet /> */}
      <Wallet />
      {/* <Metamask /> */}
      {/* <CoinbaseOption /> */}
    </div>
  );
};

export default Home;
