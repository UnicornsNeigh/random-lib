# React Web 3 Components

A single library for commonly used web3 react components

# Preview

You can test the component library here: https://react-web3-components.com/

# Usage

1. Install the package and Web3-react/core

```
npm install --save react-web3-components @web3-react/core

# OR

yarn add react-web3-components @web3-react/core

```

2. Configure your web3 react providers. The connectors are preconfigred, you only need to pass them at the top level.

```
import { Web3ReactProvider } from "@web3-react/core";
import { connectors } from "web3-react-components";


<Web3ReactProvider connectors={connectors}>
 <App />
</Web3ReactProvider>

```

3. Configure your REACT_APP_RPC_URL in the your .env file. If you don't have one yet, you can get one for free [here](https://infura.io/). **Note:** both the modal and wallet will work without a RPC URL but you won't be able to interact with the blockchain. The ens profile will fail without configuration

```
REACT_APP_RPC_URL=https://mainnet.infura.io/v3/yourinfuraid
```

4. Import the component you want to use, no additional configuration is needed beyond setting the environment variable and setting up your provider.

```
import { Modal } from "react-web3-components";


return <Modal isOpen={isOpen} close={() => setOpen(false)} />
```

All Components

### Wallet

```
import {
    Wallet, //All 3 wrapped together
    MetaMaskWallet,  // Only MetaMask option
    CoinbaseWallet, // Only coinbase option
    WalletConnectWallet, // Only Wallet Connect option
} from "react-web3-components";


return <Wallet />

```

### Modal

```
import { Modal } from "react-web3-components";

const [isOpen, setOpen] = useState(false);

return <Modal isOpen={isOpen} close={() => setOpen(false)}   />

```

### Ens Profile Image

```
import { EnsProfileImage } from "react-web3-components";


return <EnsProfileImage ens="vitalik.eth" size={24}  />

```
