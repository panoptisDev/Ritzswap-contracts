require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-contract-sizer");
require("hardhat-watcher");
require("hardhat-deploy");
const dotenv = require("dotenv");
const yargs = require("yargs");

const argv = yargs
  .option("network", {
    type: "string",
    default: "hardhat",
  })
  .help(false)
  .version(false).argv;

// Load environment variables.
dotenv.config();
const {
  GAS_PRICE_GWEI,
  INFURA_KEY,
  MNEMONIC,
  MY_ETHERSCAN_API_KEY,
  MY_BSCSCAN_API_KEY,
  MY_POLYGONSCAN_API_KEY,
  PK,
} = process.env;

const DEFAULT_MNEMONIC =
  "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat";

const sharedNetworkConfig = {};
if (PK) {
  sharedNetworkConfig.accounts = [PK];
} else {
  sharedNetworkConfig.accounts = {
    mnemonic: MNEMONIC || DEFAULT_MNEMONIC,
  };
}

if (["rinkeby", "mainnet"].includes(argv.network) && INFURA_KEY === undefined) {
  throw new Error(
    `Could not find Infura key in env, unable to connect to network ${argv.network}`
  );
}

module.exports = {
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {
      accounts: {
        accountsBalance: "1000000000000000000000000000000",
      },
    },
    mainnet: {
      ...sharedNetworkConfig,
      url: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
      gasPrice: GAS_PRICE_GWEI
        ? parseInt(
            utils.parseUnits(GAS_PRICE_GWEI.toString(), "gwei").toString()
          )
        : "auto",
    },
    rinkeby: {
      ...sharedNetworkConfig,
      url: `https://rinkeby.infura.io/v3/${INFURA_KEY}`,
      gasPrice: GAS_PRICE_GWEI
        ? parseInt(
            utils.parseUnits(GAS_PRICE_GWEI.toString(), "gwei").toString()
          )
        : "auto",
    },
    ropsten: {
      ...sharedNetworkConfig,
      url: `https://ropsten.infura.io/v3/${INFURA_KEY}`,
      gasPrice: GAS_PRICE_GWEI
        ? parseInt(
            utils.parseUnits(GAS_PRICE_GWEI.toString(), "gwei").toString()
          )
        : "auto",
    },
    kovan: {
      ...sharedNetworkConfig,
      url: `https://kovan.infura.io/v3/${INFURA_KEY}`,
      gasPrice: GAS_PRICE_GWEI
        ? parseInt(
            utils.parseUnits(GAS_PRICE_GWEI.toString(), "gwei").toString()
          )
        : "auto",
    },
    xdai: {
      ...sharedNetworkConfig,
      url: "https://xdai.1hive.org",
      gasPrice: GAS_PRICE_GWEI
        ? parseInt(
            utils.parseUnits(GAS_PRICE_GWEI.toString(), "gwei").toString()
          )
        : "auto",
    },
    polygon: {
      ...sharedNetworkConfig,
      url: "https://rpc-mainnet.maticvigil.com/",
      gasPrice: GAS_PRICE_GWEI
        ? parseInt(
            utils.parseUnits(GAS_PRICE_GWEI.toString(), "gwei").toString()
          )
        : "auto",
      },
      mumbai: {
        ...sharedNetworkConfig,
        url: "https://rpc-mumbai.maticvigil.com/",
        chainId: 80001,
        gasPrice: GAS_PRICE_GWEI
          ? parseInt(
              utils.parseUnits(GAS_PRICE_GWEI.toString(), "gwei").toString()
            )
          : "auto",
      },
    binancesmartchain: {
      ...sharedNetworkConfig,
      url: "https://bsc-dataseed1.binance.org/",
      gasPrice: GAS_PRICE_GWEI
        ? parseInt(
            utils.parseUnits(GAS_PRICE_GWEI.toString(), "gwei").toString()
          )
        : "auto",
    },
    bsc: {
      ...sharedNetworkConfig,
      url: "https://data-seed-prebsc-2-s2.binance.org:8545/",
      chainId: 97,
      gasPrice: GAS_PRICE_GWEI
        ? parseInt(
            utils.parseUnits(GAS_PRICE_GWEI.toString(), "gwei").toString()
          )
        : "auto",
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.4.17",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.4.26",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.5.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.6.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.6.2",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.7.3",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },

  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
    deploy: "scripts/deploy",
  },
  namedAccounts: {
    deployer: 0,
  },
  mocha: {
    timeout: 2000000,
  },
  etherscan: {
    apiKey: MY_BSCSCAN_API_KEY,
    apiKey: MY_POLYGONSCAN_API_KEY
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: false,
    disambiguatePaths: false,
  },
  watcher: {
    compilation: {
      tasks: ["compile"],
    },
  },
};
