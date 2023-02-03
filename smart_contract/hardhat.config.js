//https://eth-goerli.g.alchemy.com/v2/A1CoUIQ2KcC0uxvClsx4uOrT6uhCbKgl

require('@nomiclabs/hardhat-waffle');


module.exports = {
  solidity: "0.8.17",
  networks: {
    Goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/A1CoUIQ2KcC0uxvClsx4uOrT6uhCbKgl",
      accounts: [ 'e6cfc4f6602e956506a953a4555b67bf0fa9f279464aa901874a48b90a63e767' ]
    }
  },
};
