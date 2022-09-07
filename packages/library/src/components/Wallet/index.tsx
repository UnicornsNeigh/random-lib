import React from "react";
import styled from "styled-components";

import CoinbaseWallet from "./CoinbaseWallet";
import MetaMaskWallet from "./MetaMaskWallet";
import WalletConnectWallet from "./WalletConnectWallet";

const Grid = styled.div`
  display: grid;
  row-gap: 10px;
`;

const Header = styled.h3`
  margin: 0;
  margin-bottom: 10px;
`;

const Wallet = () => {
  return (
    <Grid>
      <Header>Connect A Wallet</Header>
      <MetaMaskWallet />
      <CoinbaseWallet />
      <WalletConnectWallet />
    </Grid>
  );
};

export default Wallet;
