<<<<<<< HEAD
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  // defaultNetwork: "rinkeby",
  paths: {
    artifacts: "./client/artifacts",
  },
  networks: {
    hardhat: {
      chainId: 31337,
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com/",
      accounts: ["03dae4b7f6c8dbb16c7d437d047d47b642d2549dcbce849f8adf8d576ce01c82"],
      chainId: 80001,
    },
    // rinkeby: {
    //   url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_KEY}`,
    //   accounts: [`0x${ACCOUNT_PRIVATE_KEY}`]
    // }
  },
};
=======
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  
  paths: {
    artifacts: "./client/artifacts",
  },
  networks: {
    hardhat: {
      chainId: 31337,
    },
  },
};
>>>>>>> 751a387 (frontend added)
