---
layout: post
title: "Mining with ASICs"
date: 2018-03-01
excerpt: "Start mining AXE coin with ASIC miner"
tags: [mining, linux, windows, guide, asic]
comments: true
---

### Download a miner.

SGminer for Windows - download <a href="https://github.com/nicehash/sgminer/releases"><b>here</b></a><br />
SGminer Source - download <a href="https://github.com/nicehash/sgminer/releases"><b>here</b></a>br />
CCminer 1.2 (Nvidia - Compute 2.5+) - download <a href="https://github.com/cbuchner1/ccminer/releases/download/v1.2/ccminer-v1.2.zip"><b>here</b></a>br />

### Create AXE address to receive payments.

Download the AXE client from <a href="https://github.com/AXErunners/axe/releases"><b>here</b></a>
Generate a new address and input it on your account page to receive payments.

### Configure your miner.

If you want to mine on a Windows Operating System, then you'll need to create a batch file to start your miner.

Simply open notepad and then copy and paste the following:<br />

SGMiner<br />
```
sgminer --kernel darkcoin-mod -o stratum+tcp://eu1.arcpool.com:1208 -u PBSFWKt583Xb5t92EPccWnXP2UHMTtCt5F -p x
```
CCminer<br />
```
ccminer -a x11 -o stratum+tcp://eu1.arcpool.com:1208 -u PBSFWKt583Xb5t92EPccWnXP2UHMTtCt5F -p x
```
You then need to change -u `PBSFWKt583Xb5t92EPccWnXP2UHMTtCt5F` to reflect your own address. Replace `stratum+tcp://eu1.arcpool.com:1208` to another pool if needed. Go to "File > Save as" and save the file as `start.bat` in the same folder containing your miners application files. You are now ready to mine, double click on `start.bat` to start mining.
