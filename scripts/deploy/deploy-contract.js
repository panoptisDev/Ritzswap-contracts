const { contractNames ,OWNER_ADDRESS} = require("../utils");

const deployRitzSwapV2FactoryContract = async function (hre) {
  const { deployments, getNamedAccounts } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy, get } = deployments;
  const {
    weth,
    usdt,
    busd,
    usdc,
    dai,
    cos,
    txl,
    ritz,
    bunny,
    collect,
    bitcoin,
    chainlink,
    syrup,
    ritzSwapV2Factory,
    ritzSwapV2Router02,
    timer,
    timeLock,
    multicall,
    masterChef,
    sousChef,
    smartChefFactory,
    ethStaking,
  } = contractNames;
  
  // await deploy(ritzSwapV2Factory, {
  //   from: deployer,
  //   args: [OWNER_ADDRESS],
  //   log: true,
  //   deterministicDeployment: false,
  // });
  // const FACTORY = await get(ritzSwapV2Factory);

  // await deploy(weth, {
  //   from: deployer,
  //   args: [],
  //   log: true,
  //   deterministicDeployment: false,
  // });
  // const WETH = await get(weth);

  // await deploy(collect, {
  //   from: deployer,
  //   args: [],
  //   log: true,
  //   deterministicDeployment: false,
  // });
  // const Collect = await get(collect);

  // await deploy(usdt, {
  //   from: deployer,
  //   args: [],
  //   log: true,
  //   deterministicDeployment: false,
  // });
  // const USDT = await get(usdt);

  // await deploy(busd, {
  //   from: deployer,
  //   args: [],
  //   log: true,
  //   deterministicDeployment: false,
  // });
  // const BUSD = await get(busd);

  // await deploy(usdc, {
  //   from: deployer,
  //   args: [],
  //   log: true,
  //   deterministicDeployment: false,
  // });
  // const USDC = await get(usdc);

  // await deploy(dai, {
  //   from: deployer,
  //   args: [],
  //   log: true,
  //   deterministicDeployment: false,
  // });
  // const DAI = await get(dai);

  // await deploy(txl, {
  //   from: deployer,
  //   args: [],
  //   log: true,
  //   deterministicDeployment: false,
  // });
  // const TXL = await get(txl);

  
  // await deploy(ritz, {
  //   from: deployer,
  //   args: [],
  //   log: true,
  //   deterministicDeployment: false,
  // });
  // const RITZ = await get(ritz);

  // await deploy(bitcoin, {
  //   from: deployer,
  //   args: [],
  //   log: true,
  //   deterministicDeployment: false,
  // });
  // const BITCOIN = await get(bitcoin);

  // await deploy(cos, {
  //   from: deployer,
  //   args: [],
  //   log: true,
  //   deterministicDeployment: false,
  // });
  // const COS = await get(cos);

  // await deploy(bunny, {
  //   from: deployer,
  //   args: [],
  //   log: true,
  //   deterministicDeployment: false,
  // });
  // const BUNNY = await get(bunny);

  // await deploy(chainlink, {
  //   from: deployer,
  //   args: [],
  //   log: true,
  //   deterministicDeployment: false,
  // });
  // const CHAINLINK = await get(chainlink);

  // await deploy(syrup, {
  //   from: deployer,
  //   args: [RITZ.address],
  //   log: true,
  //   deterministicDeployment: false,
  // });
  // const SYRUP = await get(syrup);

  // await deploy(ritzSwapV2Router02, {
  //   from: deployer,
  //   args: [FACTORY.address, WETH.address],
  //   log: true,
  //   deterministicDeployment: false,
  // });
  // const ROUTER = await get(ritzSwapV2Router02);

  // await deploy(timer, {
  //   from: deployer,
  //   args: [],
  //   log: true,
  //   deterministicDeployment: false,
  // });
  // const TIMER = await get(timer);

  // await deploy(timeLock, {
  //   from: deployer,
  //   args: [OWNER_ADDRESS, "21700"],
  //   log: true,
  //   deterministicDeployment: false,
  // });
  // const TIMELOCK = await get(timeLock);

  // await deploy(multicall, {
  //   from: deployer,
  //   args: [],
  //   log: true,
  //   deterministicDeployment: false,
  // });
  // const MULTICALL = await get(multicall);

  // await deploy(masterChef, {
  //   from: deployer,
  //   args: [
  //     RITZ.address,
  //     SYRUP.address,
  //     OWNER_ADDRESS,
  //     "100000000000000000",
  //     "10951000",
  //   ],
  //   log: true,
  //   deterministicDeployment: false,
  // });
  // const MASTER_CHEF = await get(masterChef);

  // await deploy(sousChef, {
  //   from: deployer,
  //   args: [SYRUP.address, "100000000000000000", "10951000", "10991000"],
  //   log: true,
  //   deterministicDeployment: false,
  // });
  // const SOUS_CHEF = await get(sousChef);

  // await deploy(smartChefFactory, {
  //   from: deployer,
  //   args: [],
  //   log: true,
  //   deterministicDeployment: false,
  // });
  // const SMART_CHEF_FACTORY = await get(smartChefFactory);

  // await deploy(ethStaking, {
  //   from: deployer,
  //   args: [
  //     lp.address,
  //     rewardToken,
  //     rewardPerBlock,
  //     startBlock,
  //     endblock,
  //     adminAddress,
  //     WETH.address,
  //   ],
  //   log: true,
  //   deterministicDeployment: false,
  // });
  // const ETH_STAKING = await get(ethStaking);

  // --------------- verifying smart contract codes ------------------------------

  // try {
  //   await hre.run("verify", {
  //     address: Collect.address,
  //     constructorArgsParams: [],
  //   });
  // } catch (error) {
  //   console.log(
  //     `Smart contract at address ${Collect.address} is already verified`
  //   );
  // }

  // try {
  //   await hre.run("verify", {
  //     address: FACTORY.address,
  //     constructorArgsParams: [OWNER_ADDRESS],
  //   });
  // } catch (error) {
  //   console.log(
  //     `Smart contract at address ${FACTORY.address} is already verified`
  //   );
  // }

  // try {
  //   await hre.run("verify", {
  //     address: WETH.address,
  //     constructorArgsParams: [],
  //   });
  // } catch (error) {
  //   console.log(
  //     `Smart contract at address ${WETH.address} is already verified`
  //   );
  // }

  // try {
  //   await hre.run("verify", {
  //     address: USDT.address,
  //     constructorArgsParams: [],
  //     contract: "contracts/tokens/Usdt.sol:USDT",
  //   });
  // } catch (error) {
  //   console.log(
  //     `Smart contract at address ${USDT.address} is already verified`
  //   );
  // }

  // try {
  //   await hre.run("verify", {
  //     address: BUSD.address,
  //     constructorArgsParams: [],
  //     contract: "contracts/tokens/Busd.sol:BUSD",
  //   });
  // } catch (error) {
  //   console.log(
  //     `Smart contract at address ${BUSD.address} is already verified`
  //   );
  // }

  // try {
  //   await hre.run("verify", {
  //     address: USDC.address,
  //     constructorArgsParams: [],
  //     contract: "contracts/tokens/Usdc.sol:USDC",
  //   });
  // } catch (error) {
  //   console.log(
  //     `Smart contract at address ${USDC.address} is already verified`
  //   );
  // }

  // try {
  //   await hre.run("verify", {
  //     address: DAI.address,
  //     constructorArgsParams: [],
  //     contract: "contracts/tokens/Dai.sol:DAI",
  //   });
  // } catch (error) {
  //   console.log(`Smart contract at address ${DAI.address} is already verified`);
  // }

  // try {
  //   await hre.run("verify", {
  //     address: TXL.address,
  //     constructorArgsParams: [],
  //   });
  // } catch (error) {
  //   console.log(`Smart contract at address ${TXL.address} is already verified`);
  // }

  // try {
  //   await hre.run("verify", {
  //     address: RITZ.address,
  //     constructorArgsParams: [],
  //   });
  // } catch (error) {
  //   console.log(
  //     `Smart contract at address ${RITZ.address} is already verified`
  //   );
  // }

  // try {
  //   await hre.run("verify:verify", {
  //     address: BITCOIN.address,
  //     constructorArgsParams: [],
  //     contract: "contracts/tokens/Btc.sol:Bitcoin",
  //   });
  // } catch (error) {
  //   console.log(
  //     `Smart contract at address ${BITCOIN.address} is already verified`
  //   );
  // }

  // try {
  //   await hre.run("verify:verify", {
  //     address: COS.address,
  //     constructorArgsParams: [],
  //     contract: "contracts/tokens/Cos.sol:COS",
  //   });
  // } catch (error) {
  //   console.log(
  //     `Smart contract at address ${COS.address} is already verified`
  //   );
  // }

  // try {
  //   await hre.run("verify:verify", {
  //     address: BUNNY.address,
  //     constructorArgsParams: [],
  //     contract: "contracts/tokens/Bunny.sol:BUNNY",
  //   });
  // } catch (error) {
  //   console.log(
  //     `Smart contract at address ${BUNNY.address} is already verified`
  //   );
  // }

  // try {
  //   await hre.run("verify", {
  //     address: CHAINLINK.address,
  //     constructorArgsParams: [],
  //   });
  // } catch (error) {
  //   console.log(
  //     `Smart contract at address ${CHAINLINK.address} is already verified`
  //   );
  // }

  // try {
  //   await hre.run("verify", {
  //     address: SYRUP.address,
  //     constructorArgsParams: [RITZ.address],
  //   });
  // } catch (error) {
  //   console.log(
  //     `Smart contract at address ${SYRUP.address} is already verified`
  //   );
  // }

  // try {
  //   await hre.run("verify", {
  //     address: ROUTER.address,
  //     constructorArgsParams: [FACTORY.address, WETH.address],
  //   });
  // } catch (error) {
  //   console.log(
  //     `Smart contract at address ${ROUTER.address} is already verified`
  //   );
  // }

  // try {
  //   await hre.run("verify", {
  //     address: TIMER.address,
  //     constructorArgsParams: [],
  //   });
  // } catch (error) {
  //   console.log(
  //     `Smart contract at address ${TIMER.address} is already verified`
  //   );
  // }

  // try {
  //   await hre.run("verify", {
  //     address: TIMELOCK.address,
  //     constructorArgsParams: [OWNER_ADDRESS, "21700"],
  //   });
  // } catch (error) {
  //   console.log(
  //     `Smart contract at address ${TIMELOCK.address} is already verified`
  //   );
  // }

  // try {
  //   await hre.run("verify", {
  //     address: MULTICALL.address,
  //     constructorArgsParams: [],
  //   });
  // } catch (error) {
  //   console.log(
  //     `Smart contract at address ${MULTICALL.address} is already verified`
  //   );
  // }

  // try {
  //   await hre.run("verify", {
  //     address: MASTER_CHEF.address,
  //     constructorArgsParams: [
  //       RITZ.address,
  //       SYRUP.address,
  //       OWNER_ADDRESS,
  //       "100000000000000000",
  //       "10951000",
  //     ],
  //   });
  // } catch (error) {
  //   console.log(
  //     `Smart contract at address ${MASTER_CHEF.address} is already verified`
  //   );
  // }

  // try {
  //   await hre.run("verify", {
  //     address: SOUS_CHEF.address,
  //     constructorArgsParams: [
  //       SYRUP.address,
  //       "100000000000000000",
  //       "10951000",
  //       "10991000",
  //     ],
  //   });
  // } catch (error) {
  //   console.log(
  //     `Smart contract at address ${SOUS_CHEF.address} is already verified`
  //   );
  // }

  // try {
  //   await hre.run("verify", {
  //     address: SMART_CHEF_FACTORY.address,
  //     constructorArgsParams: [],
  //   });
  // } catch (error) {
  //   console.log(
  //     `Smart contract at address ${SMART_CHEF_FACTORY.address} is already verified`
  //   );
  // }
};

module.exports = deployRitzSwapV2FactoryContract;
