import { RenNetwork } from "@renproject/interfaces";

import { renBscTestnet } from "./networks/bscTestnet";
import { renChaosnet } from "./networks/chaosnet";
import { renDevnet } from "./networks/devnet";
import { renLocalnet } from "./networks/localnet";
import { renMainnet } from "./networks/mainnet";
import { renRinkeby } from "./networks/rinkeby";
import { renTestnet } from "./networks/testnet";

export { renChaosnet } from "./networks/chaosnet";
export { renDevnet } from "./networks/devnet";
export { renLocalnet } from "./networks/localnet";
export { renMainnet } from "./networks/mainnet";
export { renTestnet } from "./networks/testnet";
export { renRinkeby } from "./networks/rinkeby";
export { renBscTestnet } from "./networks/bscTestnet";

export const RenNetworkDetailsMap = {
    [RenNetwork.Mainnet]: renMainnet,
    [RenNetwork.Chaosnet]: renChaosnet,
    [RenNetwork.Testnet]: renTestnet,
    [RenNetwork.Devnet]: renDevnet,
    [RenNetwork.Localnet]: renLocalnet,
    rinkeby: renRinkeby,
    bscTestnet: renBscTestnet,
};

export type RenNetworkDetails =
    | typeof renMainnet
    | typeof renChaosnet
    | typeof renTestnet
    | typeof renDevnet
    | typeof renLocalnet
    | typeof renRinkeby
    | typeof renBscTestnet;
