const Web3 = require("web3");
const ethereumAddress = require("ethereum-address");
const axios = require("axios");

export const apikey = "ECCZ959NWYZ5GFXZZTQ7XGIIAZEP5G3A2H";

export const formatBalance = (response: string) => {
  const etherValue = Web3.utils.fromWei(response, "ether");
  return Number(etherValue).toFixed(4);
};

export const validation = (value: string) => {
  return ethereumAddress.isAddress(value);
};

export const convertEth = () => {
  const url = "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,ETH";
  return axios
    .get(url)
    .then((data: any) => data.data)
    .catch(() => false);
};
