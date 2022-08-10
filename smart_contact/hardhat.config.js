//https://eth-goerli.g.alchemy.com/v2/J-kT9pU5sZlIMNcXAkHSTGag8Ao_NvSi

require('@nomiclabs/hardhat-waffle');
module.exports = {
  solidity: '0.8.0',
  networks:{
    goerli:{
      url:'https://eth-goerli.g.alchemy.com/v2/J-kT9pU5sZlIMNcXAkHSTGag8Ao_NvSi',
      accounts:['04353e68b0f6abbbbd35d3800fb791544025110956ff47b2bf2b69f1d3f80950']
    }
  }
}