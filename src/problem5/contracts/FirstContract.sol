// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
contract Addr{
    function balanceOf(address) public view returns (uint256 amount){}
}

contract FirstContract{
    struct Token{
        address addr;
        uint amount;
    }
    Token[] tokens;
    function getBalances(address account, address[] memory _addresses) internal view returns(address[] memory, uint[] memory){
        uint len = _addresses.length;
        address[] memory addrs = new address[](len);
        uint[] memory amounts = new uint[](len);
        uint i = 0;
        while (i != len){
            Token storage token = tokens[i];
            addrs[i] = token.addr;
            amounts[i] = Addr(_addresses[i]).balanceOf(account);
            i++;
        }
        // deconstructed the struct and separated the fields into addesses and token amounts
        // returns a tuple containing 2 arrays, 1 for all the token addresses and another for 
        // the amounts matched by indices
        return (addrs, amounts);
    }
}