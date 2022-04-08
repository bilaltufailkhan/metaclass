import { InjectedConnector } from "@web3-react/injected-connector";

export const injected = new InjectedConnector({
  supportedChainIds: [1, 56, 333999, 60, 61, 3, 4, 5, 42],
});
