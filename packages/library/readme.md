# React Web 3 Components

A single library for commonly used web3 react components

# Preview

You can test the component library here: https://react-web3-components.com/

# Usage

1. Install the package

```
npm install --save react-web3-components

# OR

yarn add react-web3-components
```

2. Configure your REACT_APP_RPC_URL in the your .env file. If you don't have one yet, you can get one for free [here](https://infura.io/). <b>Note:</b> both the modal and wallet will work without a RPC URL but you won't be able to interact with the blockchain. The ens profile will fail without configuration

```
REACT_APP_RPC_URL=https://mainnet.infura.io/v3/yourinfuraid
```

3. Import the component you want to use, no additional configuration is needed beyond setting the environment variable.

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
