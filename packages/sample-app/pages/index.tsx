import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Div, Wallet } from "random123azaaaazdsf";
// import Wallet from "./Wallet";
import CoinbaseOption from "./components/CoinbaseOption";
import Metamask from "./components/Metamask";
import Modal from "./components/Modal";

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <span>
      <Wallet />
    </span>
  );
};

export default Home;
