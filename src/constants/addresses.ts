import { Networks } from "../config/connectors";

const BSC_MAINNET = {
  TOKEN_ADDRESS: process.env.REACT_APP_TOKEN_ADDRESS,
  FIREPIT_ADDRESS: process.env.REACT_APP_FIREPIT_ADDRESS,
  TREASURY_ADDRESS: process.env.REACT_APP_TREASURY_ADDRESS,
  SIF_ADDRESS: process.env.REACT_APP_SIF_ADDRESS,
  PAIR_ADDRESS: process.env.REACT_APP_PAIR_ADDRESS,
  BUSD_ADDRESS: process.env.REACT_APP_BUSD_ADDRESS,
};

export const getAddresses = (networkID: number) => {
  console.log(BSC_MAINNET);
  if (networkID === Networks.BSC) return BSC_MAINNET;
  throw Error("Network don't support");
};
