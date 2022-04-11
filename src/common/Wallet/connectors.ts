import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

export const injected = new InjectedConnector({
  supportedChainIds: [56],
});

export const walletconnect = new WalletConnectConnector({
  rpc: { 1: "https://rinkeby.infura.io/v3/84842078b09946638c03157f83405213" },
  qrcode: true,
});

export const BNBChain = {
  rpc: "https://bsc-dataseed1.ninicoin.io/",
  chainId: 56,
};

export const TOKEN_DECIMALS = 5;

export enum Networks {
  BSC = 56,
}

export const DEFAULD_NETWORK = Networks.BSC;
