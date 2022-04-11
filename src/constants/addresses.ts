import { Networks } from "../common/Wallet/connectors";

const BSC_MAINNET = {
  // TOKEN_ADDRESS: "0xa18bdf653018166e58319dee3487f72f13147f38",
  TOKEN_ADDRESS: "0xa18bdf653018166e58319dee3487f72f13147f38",
  FIREPIT_ADDRESS: "0xa18bdf653018166e58319dee3487f72f13147f38",
  TREASURY_ADDRESS: "0xa18bdf653018166e58319dee3487f72f13147f38",
  SIF_ADDRESS: "0xa18bdf653018166e58319dee3487f72f13147f38",
  PAIR_ADDRESS: "0xa18bdf653018166e58319dee3487f72f13147f38",
  BUSD_ADDRESS: "0xa18bdf653018166e58319dee3487f72f13147f38",
};

export const getAddresses = (networkID: number) => {
  console.log(BSC_MAINNET);
  if (networkID === Networks.BSC) return BSC_MAINNET;
  throw Error("Network don't support");
};
