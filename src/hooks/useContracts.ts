import { getAddresses } from "../constants/addresses";
import { useWeb3React as UseWeb3React } from "@web3-react/core";
import { useMemo } from "react";
import { getContract } from "../utils/contracts";
import { Contract } from "@ethersproject/contracts";
import { erc20ABI, lpABI, tokenABI } from "../config/abi.js";
import { ethers } from "ethers";
import { BNBChain } from "../config/connectors";
import { getTokenPrice } from "../utils/getPrice";

export function useContract(
  address: string | undefined,
  ABI: any,
  withSignerIfPossible = true
): Contract | null {
  const { library, account } = UseWeb3React();
  let ethersProvider = new ethers.providers.JsonRpcProvider(BNBChain.rpc);
  const provider = library ? library : ethersProvider;

  return useMemo(() => {
    if (!address || !ABI || !provider) return null;
    try {
      return getContract(
        address,
        ABI,
        provider,
        withSignerIfPossible && account ? account : undefined
      );
    } catch (error) {
      console.log("Failed to get contract", error);
      return null;
    }
  }, [address, ABI, provider, withSignerIfPossible, account]);
}

export function UseTokenContract(
  withSignerIfPossible?: boolean
): Contract | null {
  const addresses = getAddresses(56);
  console.log("Addresses" + addresses);

  return useContract(addresses.TOKEN_ADDRESS, tokenABI, withSignerIfPossible);
}

export function usePairContract(
  withSignerIfPossible?: boolean
): Contract | null {
  const addresses = getAddresses(56);
  console.log("Addresses" + addresses);
  return useContract(addresses.PAIR_ADDRESS, lpABI, withSignerIfPossible);
}

export async function UseTokenPrice() {
  const pairContract = usePairContract();
  console.log(pairContract);
  // return null;
  const bnbPrice = await getTokenPrice();
  const reserves = await pairContract.getReserves();
  const marketPrice = reserves[0] / reserves[1];
  const tokenPrice = marketPrice / Math.pow(10, 13);

  return tokenPrice * bnbPrice;
}

export function useBusdContract(
  withSignerIfPossible?: boolean
): Contract | null {
  const addresses = getAddresses(56);
  return useContract(addresses.BUSD_ADDRESS, erc20ABI, withSignerIfPossible);
}

export async function getTreasuryTokenValue() {
  const tokenContract = UseTokenContract();
  const tokenPrice = await UseTokenPrice();
  const addresses = getAddresses(56);

  const treasuryTokenValue =
    ((await tokenContract.balanceOf(addresses.TREASURY_ADDRESS)) /
      Math.pow(10, 5)) *
    tokenPrice;

  return treasuryTokenValue;
}

export function getTreasuryValueOfUser() {
  const { library, account } = UseWeb3React();
  const addresses = getAddresses(56);

  let ethersProvider = new ethers.providers.JsonRpcProvider(BNBChain.rpc);
  const provider = library ? library : ethersProvider;
  return provider.getBalance(addresses.TREASURY_ADDRESS);
}
