import { Networks } from "../config/connectors";

const BSC_MAINNET = {
  TOKEN_ADDRESS: process.env.NEXT_PUBLIC_TOKEN_ADDRESS,
  FIREPIT_ADDRESS: process.env.NEXT_PUBLIC_FIREPIT_ADDRESS,
  TREASURY_ADDRESS: process.env.NEXT_PUBLIC_TREASURY_ADDRESS,
  SIF_ADDRESS: process.env.NEXT_PUBLIC_SIF_ADDRESS,
  PAIR_ADDRESS: process.env.NEXT_PUBLIC_PAIR_ADDRESS,
  BUSD_ADDRESS: process.env.NEXT_PUBLIC_BUSD_ADDRESS,
};

export const getAddresses = (networkID: number) => {
  if (networkID === Networks.BSC) return BSC_MAINNET;
  throw Error("Network don't support");
};
