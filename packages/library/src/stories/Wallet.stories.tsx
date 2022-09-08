import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Wallet as WalletComponent } from "../components";
import { MetaMaskWallet } from "../components";
import { CoinbaseWallet } from "../components";
import { WalletConnectWallet } from "../components";

export default {
  title: "Example/WalletOptions",
  component: WalletComponent,
} as ComponentMeta<typeof WalletComponent>;

const FullWalletTemplate: ComponentStory<typeof WalletComponent> = () => (
  <div style={{ width: 400, marginLeft: "auto", marginRight: "auto" }}>
    <WalletComponent />
  </div>
);

const MetaMaskTemplate: ComponentStory<typeof MetaMaskWallet> = () => (
  <div style={{ width: 400, marginLeft: "auto", marginRight: "auto" }}>
    <MetaMaskWallet />
  </div>
);

const CoinbaseTemplate: ComponentStory<typeof MetaMaskWallet> = () => (
  <div style={{ width: 400, marginLeft: "auto", marginRight: "auto" }}>
    <CoinbaseWallet />
  </div>
);

const WalletConnectTemplate: ComponentStory<typeof MetaMaskWallet> = () => (
  <div style={{ width: 400, marginLeft: "auto", marginRight: "auto" }}>
    <WalletConnectWallet />
  </div>
);

export const Wallet = FullWalletTemplate.bind({});
export const MetamaskOnly = MetaMaskTemplate.bind({});
export const CoinbaseWalletOnly = CoinbaseTemplate.bind({});
export const WalletConnectWalletOnly = WalletConnectTemplate.bind({});
