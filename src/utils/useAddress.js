let str;

export const useAddress = (str) => {
  return str.length > 41
    ? str.substring(0, 4) + "..." + str.substring(38, 42)
    : str;
};
