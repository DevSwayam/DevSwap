import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x15544F68c74f17c8b49196350f7b4a0EA5266122"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/-KWqKbaarzsJ1yLFOVfoswHTISXZecUX",
  },
};