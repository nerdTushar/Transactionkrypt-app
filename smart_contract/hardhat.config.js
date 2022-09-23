// https://eth-goerli.g.alchemy.com/v2/33J6YyQPOTKVTKChmWUO-YvN-5AsDljs

require('@nomiclabs/hardhat-waffle');

// const ALCHEMY_API_KEY = "33J6YyQPOTKVTKChmWUO-YvN-5AsDljs";
const GOERLI_PRIVATE_KEY = "e93d8dc1d343d56e98d28bd68f0c263c2091558e2c5c49a7b98fd24644c7ea0d";

module.exports = {
  solidity: '0.8.17',
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/33J6YyQPOTKVTKChmWUO-YvN-5AsDljs",
      accounts: [GOERLI_PRIVATE_KEY],
    },
  },
};
