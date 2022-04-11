import { Networks } from "../common/Wallet/connectors";

const BSC_MAINNET = {
  // TOKEN_ADDRESS: "0xa18bdf653018166e58319dee3487f72f13147f38",
  TOKEN_ADDRESS: "0xAbacd218c3192A73413566f18811090e0a944cb5",
  FIREPIT_ADDRESS: "0xAbacd218c3192A73413566f18811090e0a944cb5",
  TREASURY_ADDRESS: "0xAbacd218c3192A73413566f18811090e0a944cb5",
  SIF_ADDRESS: "0xAbacd218c3192A73413566f18811090e0a944cb5",
  PAIR_ADDRESS: "0xAbacd218c3192A73413566f18811090e0a944cb5",
  BUSD_ADDRESS: "0xAbacd218c3192A73413566f18811090e0a944cb5",
};

export const getAddresses = (networkID: number) => {
  console.log(BSC_MAINNET);
  if (networkID === Networks.BSC) return BSC_MAINNET;
  throw Error("Network don't support");
};
