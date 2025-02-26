import { RenNetwork } from "@renproject/utils";

export const renRpcUrls = {
    [RenNetwork.Mainnet]: "https://rpc.renproject.io",
    [RenNetwork.Testnet]: "https://rpc-testnet.renproject.io",
    [RenNetwork.Devnet]: "https://lightnode-devnet.herokuapp.com/",
};

export const renExplorerUrls = {
    [RenNetwork.Mainnet]: "https://explorer.renproject.io",
    [RenNetwork.Testnet]: "https://explorer-testnet.renproject.io",
    [RenNetwork.Devnet]: "",
};
