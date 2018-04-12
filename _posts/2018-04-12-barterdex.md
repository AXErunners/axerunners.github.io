---
layout: post
title: "Starting BarterDEX"
date: 2018-04-12
excerpt: "How to setup BarterDEX with AXE core"
tags: [trading, decentralized, exchange, guide, core, linux, windows, mac]
comments: true
---
## Environment
Download and install <a href="https://github.com/AXErunners/axe/releases/latest"><b>AXE</b></a> with other wallets you planning to trade with. While your wallets are syncing, download latest BarterDEX binaries <a href="https://github.com/KomodoPlatform/BarterDEX/releases"><b>here</b></a>. When wallets are synced, close AXE core and edit `axe.conf` as in the example below:
```
rpcuser=axerunner283723
rpcpassword=warp2178302
server=1
txindex=1
rpcbind=127.0.0.1
bind=127.0.0.1
rpcport=9337
port=9937
```
If needed, add necessary changes to another wallets.
## First start
Open <b>BarterDEX</b> and generate your seed. This seed will be associated with your wallet's deposit address. Don't lose it, or you will not be able to access your deposits in watch-only addresses. If you are using AXE core, select `native` mode. For SPV wallets - use `electrum` mode. After adding your coins, click on `exchange`, select pairs you want to trade, and send your first order. 

Ref: https://github.com/KomodoPlatform/BarterDEX/wiki/Setup-Bitcoin-Cash-for-BarterDEX
