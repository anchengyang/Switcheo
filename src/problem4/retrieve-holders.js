const { ethers } = require("ethers");
const abi = [
  "function balanceOf(address account) external view returns (uint256)"
];
const address = "0xc0ecb8499d8da2771abcbf4091db7f65158f1468";
// create apikey and generate endpoint from https://getblock.io/
const apikey = '';

const provider = new ethers.providers.JsonRpcProvider('https://bsc.getblock.io/mainnet/?api_key=' + apikey);
const contract = new ethers.Contract(address, abi, provider);

let addresses = ["0xb5d4f343412dc8efb6ff599d790074d0f1e8d430",
                  "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
                  "0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392"];
                  
const getTokenBalance = () => {
  Promise.all(addresses.map(addr => contract.balanceOf(addr))).then(
    results => {
      results.forEach((val, i) => console.log(addresses[i] + " " + val.toNumber()))});
};

getTokenBalance();
