// SPDX-License-Identifier: MIT
pragma solidity 0.6.12;

import "../base/ERC20.sol";


/**
 * @title ERC20Mintable
 * @dev ERC20 minting logic
 */
contract ChainLink is ERC20 {
    constructor() public ERC20("ChainLink", "LINK") {
        _setupDecimals(18);
    }

    /**
     * @dev Function to mint tokens
     * @param value The amount of tokens to mint.
     * @return A boolean that indicates if the operation was successful.
     */
    function mint(uint256 value) public returns (bool) {
        _mint(_msgSender(), value);
        return true;
    }
}
