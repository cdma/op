cd go-ethereum

make geth

make all

https://learnblockchain.cn/question/2379

{
"config": {
  "chainId": 15,
  "homesteadBlock": 0,
  "eip150Block": 0,
  "eip155Block": 0,
  "eip158Block": 0,
  "byzantiumBlock": 0,
  "constantinopleBlock": 0,
  "petersburgBlock": 0,
  "istanbulBlock": 0
},
"alloc": {
  "7df9a875a174b3bc565e6424a0050ebc1b2d1d82": { "balance": "300000" },
  "f41c74c9ae680c1aa78f42e5647a62f353b7bdde": { "balance": "400000" }
},
"coinbase": "0x0000000000000000000000000000000000000000",
"difficulty": "0x2000",
"extraData": "",
"gasLimit": "0x2fefd8",
"nonce": "0x0000000000000042",
"mixhash": "0x0000000000000000000000000000000000000000000000000000000000000000",
"parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
"timestamp": "0x00"
}



go-ethereum/build/bin/geth  --datadir custom_chain/data init custom_chain/genesis.json
go-ethereum/build/bin/geth  --datadir custom_chain/data init custom_chain/private_gennesis.json

bootnode --genkey=boot.key

go-ethereum/build/bin/bootnode --nodekey=custom_chain/boot.key -addr=:40301

go-ethereum/build/bin/geth --datadir custom_chain/data --networkid 15   --http.api 'web3,eth,net,debug,personal' --http  --http.addr 192.168.0.106  --http.corsdomain "*" --allow-insecure-unlock --rpc.allow-unprotected-txs --maxpeers 0 --allow-insecure-unlock console 2>output.log

go-ethereum/build/bin/geth --datadir custom_chain/data --networkid 15  --bootnodes=enode://68f38b36be7a72ba4d20c9f706d6a2e1edc95185903e506015601c335f1d7b9b7e1c5fdad0b01befefb29e3bae7e82e9bdfab8eff54115b5ff89fd9cde9487e9@127.0.0.1:0?discport=40301     --http.api 'web3,eth,net,debug,personal' --http  --http.addr 192.168.0.106  --http.corsdomain "*" --allow-insecure-unlock --rpc.allow-unprotected-txs --maxpeers 0 --allow-insecure-unlock console 2>output.log


go-ethereum/build/bin/geth --datadir custom_chain/data --networkid 15 removedb


eth.accounts

eth.blockNumber

personal.newAccount()

eth.accounts[0]

web3.eth.getBalance(eth.accounts[0])

web3.fromWei(web3.eth.getBalance(eth.accounts[0]), 'ether')


personal.unlockAccount(eth.accounts[0])
web3.personal.unlockAccount(eth.accounts[0])


eth.sendTransaction({from: eth.accounts[0], to: eth.accounts[1], value: web3.toWei(10, 'ether')})

miner.start(1)

eth.coinbase

miner.stop()

eth.blockNumber

eth.getTransaction("")

ls -lh  /home/op/.ethash/



eth.getBlock(0, true)

eth.getBlock(0, true)

web3.eth.getTransactionReceipt("")


eth.getBlock(3050, true).transactions[0]




