合约开发全新技术栈：Hardhat + Ethers + Waffle + Typescript【译】
https://learnblockchain.cn/article/1196

# not work

mkdir hardhat-demo
cd hardhat-demo
npm init --yes

npm install --save-dev @nomiclabs/buidler

touch hardhat.config.js
# npx buidler

mkdir contracts test scripts

npm install --save-dev ts-node typescript @types/node @types/mocha

touch buidler.config.ts

npx builder compile

npm install --save-dev ethers @nomiclabs/buidler-waffle ethereum-waffle

touch tsconfig.json

npm install --save-dev buidler-typechain typechain ts-generator @typechain/ethers-v4 @typechain/truffle-v4 @typechain/web3-v1


# npx buidler typechain





[译] Hardhat 入门教程

https://learnblockchain.cn/article/1356

mkdir hardhat-tutorial 
cd hardhat-tutorial 
npm init --yes 
npm install --save-dev hardhat

mkdir contracts test scripts

# npx hardhat

touch hardhat.config.js

npm install --save-dev @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai

npx hardhat run scripts/deploy.js --network <network-name>

npx hardhat run scripts/deploy.js



git clone https://github.com/nomiclabs/hardhat-hackathon-boilerplate

cd hardhat-hackathon-boilerplate/

npm install

npx hardhat node

npx hardhat --network localhost run scripts/deploy.js


cd hardhat-hackathon-boilerplate/frontend/

npm install

npm run start


npx hardhat --network localhost faucet 0xeca41eb38642f1950bf02950d1c8abd3e96b63e6
