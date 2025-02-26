/* eslint-disable no-console */

import { RenNetwork } from "@renproject/utils";
import chai, { expect } from "chai";
import { config as loadDotEnv } from "dotenv";

import { Ethereum } from "../src/ethereum";

loadDotEnv();

chai.should();

describe("Initialization", () => {
    it("Initialize with correct testnet", async () => {
        const mainnet = new Ethereum({
            network: RenNetwork.Mainnet,
            provider: "",
            defaultTestnet: "goerli",
        });

        expect(mainnet.configMap.mainnet.selector).to.equal("Ethereum");
        expect(mainnet.assets.ETH).to.equal("ETH");

        const kovan = new Ethereum({
            network: RenNetwork.Testnet,
            provider: "",
            defaultTestnet: "kovan",
        });

        expect(kovan.configMap.testnet.selector).to.equal("Ethereum");
        expect(kovan.assets.ETH).to.equal("ETH");

        const goerli = new Ethereum({
            network: RenNetwork.Testnet,
            provider: "",
            defaultTestnet: "goerli",
        });

        expect(goerli.configMap.testnet.selector).to.equal("Goerli");
        expect(goerli.assets.ETH).to.equal("gETH");
    });
});
