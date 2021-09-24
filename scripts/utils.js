const { utils } = require("ethers");
const { ethers } = require("hardhat");

const contractNames = {
  weth: "WETH",
  usdt: "USDT",
  busd: "BUSD",
  usdc: "USDC",
  dai: "DAI",
  txl:"TXL",
  cos:"COS",
  bunny:"BUNNY",
  ritz:"RITZ",
  collect:"Collect",
  bitcoin:"Bitcoin",
  chainlink:"ChainLink",
  syrup:"SyrupBarToken",
  ritzSwapV2Factory: "RitzSwapV2Factory",
  ritzSwapV2Router02: "RitzSwapV2Router02",
  timer:"Timer",
  timeLock:"Timelock",
  multicall:"Multicall",
  masterChef:"MasterChef",
  sousChef:"SousChef",
  smartChefFactory:"SmartChefFactory",
  ethStaking:"EthStaking"
};

/**
 * The salt used when deterministically deploying smart contracts.
 */
const SALT = utils.formatBytes32String("dev-2");

const OWNER_ADDRESS = "0x48F91fbC86679e14f481DD3C3381f0e07F93A711"


/**
 * The contract used to deploy contracts deterministically with CREATE2.
 * The address is chosen by the hardhat-deploy library.
 * It is the same in any EVM-based network.
 *
 * https://github.com/Arachnid/deterministic-deployment-proxy
 */
const DEPLOYER_CONTRACT = "0x4e59b44847b379578588920ca78fbf26c0b4956c";

/**
 * Computes the deterministic address at which the contract will be deployed.
 * This address does not depend on which network the contract is deployed to.
 *
 * @param contractName Name of the contract for which to find the address.
 * @param deploymentArguments Extra arguments that are necessary to deploy.
 * @returns The address that is expected to store the deployed code.
 */
const deterministicDeploymentAddress = async (
  contractName,
  ...deploymentArguments
) => {
  const factory = await ethers.getContractFactory(contractName);
  const deployTransaction = factory.getDeployTransaction(
    ...deploymentArguments
  );

  return utils.getCreate2Address(
    DEPLOYER_CONTRACT,
    SALT,
    utils.keccak256(deployTransaction.data || "0x")
  );
};

/**
 * Print to screen the result of a successful contract deployment.
 *
 * @param deployResult Result of the deployment.
 * @param contractName Name of the deployed contract.
 * @param networkName Name of the network to which the contract is deployed.
 * @param log The logging function.
 */
const logResult = async (deployResult, contractName, networkName, log) => {
  if (deployResult.newlyDeployed) {
    // the transaction exists since the contract was just deployed
    /* eslint-disable @typescript-eslint/no-non-null-assertion */
    const transaction = await ethers.provider.getTransaction(
      deployResult.transactionHash
    );
    const receipt = deployResult.receipt;
    /* eslint-enable @typescript-eslint/no-non-null-assertion */
    log(`Deployed contract ${contractName} on network ${networkName}.`);
    log(` - Address: ${deployResult.address}`);
    log(` - Transaction hash: ${deployResult.transactionHash}`);
    log(
      ` - Gas used: ${receipt.gasUsed} @ ${
        transaction.gasPrice.toNumber() / 10 ** 9
      } GWei`
    );
    log(
      ` - Deployment cost: ${ethers.utils.formatEther(
        transaction.gasPrice.mul(receipt.gasUsed)
      )} ETH`
    );
  } else {
    log(
      `Contract ${contractName} was already deployed on network ${networkName}, skipping.`
    );
  }
};

module.exports = {
  SALT,
  logResult,
  contractNames,
  OWNER_ADDRESS,
  deterministicDeploymentAddress,
};
