import axios from "axios";

export const getTokenPrice = async () => {
  const url =
    "https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd";
  const { data } = await axios.get(url);
  return data["binancecoin"].usd;
};
