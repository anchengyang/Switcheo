const { ethers } = require("ethers");

const { Contract } = require("ethers");

// const ADDR = "…";   // your contract address
// const ABI = […];    // your contract ABI

const ADDRESS = "0xe7236b681B56afB7c4f0dD642958016f511c0f00"; // some wallet address with token balance
const TOKENS = [    // token contract addresses
"0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
"0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
];

// // you can use your own RPC provider url (no need to deploy to mainnet)
// const provider = ethers.providers.getDefaultProvider();

// const test = async () => {
// 	const contract = new ethers.Contract(ADDR, ABI, provider);

//     const balances = await contract.getBalances(ADDRESS, tokens);
	
// 	return balances;
// };

// test().then(console.log);

const FirstContract = artifacts.require('FirstContract.sol');
Contract('FirstContract', ()=> {
	it('should return', async ()=> {
		const first = await FirstContract.new();
		console.log(first);
		if (first != 0) {
			const result = await first.getBalances(ADDRESS, TOKENS);
			if (result!= 0){
				console.log(result);
			}
		}
		
	})
})