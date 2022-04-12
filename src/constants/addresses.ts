import { Networks } from "../common/Wallet/connectors";

const BSC_MAINNET = {
  // TOKEN_ADDRESS: "0xa18bdf653018166e58319dee3487f72f13147f38",
  TOKEN_ADDRESS: process.env.REACT_APP_TOKEN_ADDRESS,
  FIREPIT_ADDRESS: process.env.REACT_APP_FIREPIT_ADDRESS,
  TREASURY_ADDRESS: process.env.REACT_APP_TREASURY_ADDRESS,
  SIF_ADDRESS: process.env.REACT_APP_SIF_ADDRESS,
  PAIR_ADDRESS: process.env.REACT_APP_PAIR_ADDRESS,
  BUSD_ADDRESS: process.env.REACT_APP_BUSD_ADDRESS,
};

export const getAddresses = (networkID: number) => {
  if (networkID === Networks.BSC) return BSC_MAINNET;
  throw Error("Network don't support");
};
