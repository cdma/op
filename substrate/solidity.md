https://zhuanlan.zhihu.com/p/85896382

npm install -g remixd


npm install -g solc

npm install -g web3


npm install -g truffle

npm install -g @truffle/hdwallet-provider




npm init

npm install truffle-contract

npm install




truffle version

truffle init

truffle compile

truffle migrate

truffle migrate --reset

truffle test

truffle console --network development 

truffle develop

 truffle test  ./test/oracle.test.js

truffle test ./test/temperature.test.js --show-events

truffle test  ./test/caller.test.js



 TemperatureOracle.at("0x7ab142A9614598F030e9Cb9464528CA494F787Ad")

let temperatureOracle = await TemperatureOracle.deployed()
let address = await temperatureOracle.address
temperatureOracle.methods
let accounts = await web3.eth.getAccounts()
temperatureOracle.addOracle(accounts[1], {from: accounts[0]})
temperatureOracle.addOracle(accounts[2], {from: accounts[0]})
temperatureOracle.addOracle(accounts[3], {from: accounts[0]})

temperatureOracle.SetTemperature("3.01", {from: accounts[1]})
temperatureOracle.SetTemperature('3.01', {from: accounts[2]})
temperatureOracle.SetTemperature('3.01', {from: accounts[3]})

temperatureOracle.getTemperature.call()

web3.eth.sendTransaction({from: accounts[0], to:accounts[1], value: web3.toWei(10000000000, 'ether')})

web3.eth.sendTransaction({from: accounts[0], to:accounts[2], value: 1000000000000})

web3.eth.getTransaction("0x1728e7c912992903c743c40e64dcae2a0296b50f2e3d778f7ac3edf509954e7f")

web3.eth.getTransactionReceipt("0x1728e7c912992903c743c40e64dcae2a0296b50f2e3d778f7ac3edf509954e7f")


Truffle & Web3.js 教程：教你开发、部署第一个去中心化应用(Dapp) - 宠物商店
https://learnblockchain.cn/2018/01/12/first-dapp

https://trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript/

https://trufflesuite.com/docs/truffle/getting-started/interacting-with-your-contracts/

[译] Hardhat 入门教程
https://learnblockchain.cn/article/1356

合约开发全新技术栈：Hardhat + Ethers + Waffle + Typescript【译】
https://learnblockchain.cn/article/1196

使用 Java 和 web3j 进行 Token 开发[概述][译]
https://learnblockchain.cn/article/938



Truffle以太坊合约部署实战
https://learnblockchain.cn/article/1248



以太坊客户端Geth命令用法-参数详解
https://learnblockchain.cn/2017/11/29/geth_cmd_options

Truffle & Web3.js 教程
https://learnblockchain.cn/2018/01/12/first-dapp
pet-shop-tutorial

truffle-ts-percel-box
https://trufflesuite.com/boxes/truffle-ts-percel-box/index.html


以太坊主网部署终极指南
https://learnblockchain.cn/article/2469



如何利用OpenZeppelin编写可升级的智能合约
https://learnblockchain.cn/article/727

robust-smart-contracts-with-openzeppelin
https://trufflesuite.com/guides/robust-smart-contracts-with-openzeppelin/index.html
openzeppelin_demo

A Sweet Upgradeable Contract Experience with OpenZeppelin and Truffle
https://trufflesuite.com/blog/a-sweet-upgradeable-contract-experience-with-openzeppelin-and-truffle/index.html

OpenZeppelin 7个最常使用的合约
https://zhuanlan.zhihu.com/p/142240709

[Oraclize] 以太坊合约请求Oraclize
https://www.jianshu.com/p/7098900f4ba6

非同质化代币圣经：关于NFT你需要知道的一切
https://learnblockchain.cn/article/2544#ERC1155

[SERO] SERO矿池搭建 Deploy SERO Mine Pool
https://www.jianshu.com/p/bd1af342f56b

矿机
https://www.zhihu.com/people/wang-wang-26-27/posts


在Substrate链上跑Solidity ERC20智能合约
https://www.jianshu.com/p/8077bdf0ef94

详解ERC20与ERC721
https://zhuanlan.zhihu.com/p/35019858

技术分析 Lendf.me 被攻击，ERC777到底该不该用？
https://learnblockchain.cn/article/893

OpenZeppelin ERC777 源码解析
https://learnblockchain.cn/2019/09/26/erc777-code

合约升级模式分析
https://learnblockchain.cn/article/3308

ERC777 功能型代币（通证）最佳实践
https://learnblockchain.cn/2019/09/27/erc777

深度解析Solidity的17个坑及超详细避坑指南
https://mp.weixin.qq.com/s/fgN6nd7XNxsg7XUPhP08xg

Getting transaction history for a particular account
https://ethereum.stackexchange.com/questions/25389/getting-transaction-history-for-a-particular-account/25408

Difference between CALL, CALLCODE and DELEGATECALL
https://ethereum.stackexchange.com/questions/3667/difference-between-call-callcode-and-delegatecall


当面试官问你Uniswap的时候，你应该想到什么？
https://learnblockchain.cn/article/2753

101项智能合约安全检查清单
https://zhuanlan.zhihu.com/p/368973970

以太坊智能合约安全开发建议
https://zhuanlan.zhihu.com/p/352531356


本地开发环境以太坊合约交互实战
https://learnblockchain.cn/article/1179

使用Node.js后台监听合约事件及提供服务
https://learnblockchain.cn/2019/12/23/node-dapp

how to estimate gas cost?
https://ethereum.stackexchange.com/questions/27452/how-to-estimate-gas-cost

how-to-properly-create-a-raw-transaction-and-sign-it-using-web3(web3 v0.2)
https://ethereum.stackexchange.com/questions/36358/how-to-properly-create-a-raw-transaction-and-sign-it-using-web3-in-browser/36363
https://ethereum.stackexchange.com/questions/8736/how-to-call-my-contracts-function-using-sendtransaction


test
https://getwaffle.io/


https://geth.ethereum.org/docs/getting-started

Solidity 最新(0.8.0)中文文档
https://learnblockchain.cn/docs/solidity/


sendsignedtransaction-vs-sendrawtransaction
https://ethereum.stackexchange.com/questions/107644/sendsignedtransaction-vs-sendrawtransaction

[译]智能合约间权限控制的协作模式
https://learnblockchain.cn/article/1438






go-ethereum/build/bin/geth --datadir custom_chain/data --networkid 15 --port 30301 --http --http.port 7545 --http.addr 192.168.0.106 --maxpeers 0 console 2>output.log

go-ethereum/build/bin/geth --datadir custom_chain/data --networkid 15 --port 30301 --http --http.port 7545 --http.addr 192.168.0.106 --maxpeers 0 --allow-insecure-unlock console 2>output.log















151.101.72.133  raw.githubusercontent.com

truffle unbox pet-shop

npm install lite-server --save-dev
































https://remix.etherum.org/

npm install -g soli

