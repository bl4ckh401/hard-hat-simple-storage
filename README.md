# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
# hard-hat-simple-storage

A simple smart contract for storing data on the Ethereum blockchain using Hardhat, written in Solidity.

## Features

- Create, retrieve and delete key-value pairs
- User-friendly interface for interacting with the contract using Hardhat
- Fully tested

## Installation

To use this contract in your project, you'll need to have [Node.js](https://nodejs.org) and [Hardhat](https://hardhat.org/) installed. Then, you can install the dependencies by running:

npm install

## Usage

The contract can be deployed and interacted with using the Hardhat's `ethers.js` library. You can find an example of how to use the contract in the repository.

## Running the tests

You can run the tests by executing:

npx hardhat test

## Deployment

You can deploy the contract to the Ethereum blockchain using Hardhat. Make sure you have a local development blockchain like ganache running or have access to a testnet or mainnet through a provider like goerli.

## Contributing

This library is open-source and actively maintained, pull requests and issues are welcome.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

* This is a simple and basic smart contract for storage on Ethereum blockchain for educational and small dApp usage and it is not suitable for production use.
* This is not a secure way of storing important and sensitive information.
* This is not a scalable solution for large amount of data storage.
* This contract uses the `ethers.js` library, which is a third-party library and not part of the contract itself.
