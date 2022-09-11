import { useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { Modal } from "random123azaaaazdsf";
import Coinbase from "./components/CoinbaseOption";

const Wallet = () => {
  const { account } = useWeb3React();
  const [isOpen, setIsOpen] = useState(false);

  console.log(account);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open</button>
      {/* <Modal isOpen={isOpen} close={() => setIsOpen(false)} /> */}
      <Coinbase />
    </div>
  );
};

export default Wallet;
