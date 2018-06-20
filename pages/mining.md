---
title: mining
image: minerdedication.jpg
---
<section><h3>Create AXE address to receive payments</h3>
Download the <a href="https://github.com/AXErunners/axe/releases"><b>AXE core</b></a> or <a href="https://github.com/AXErunners/electrum-axe/releases"><b>Electrum-AXE</b></a> thin client. Generate a new address to receive payments from the mining operation.<br /></section>
<h2 class="major">CPU/GPU</h2>
<h3>Download a miner</h3>
SGminer for Windows <a href="https://github.com/nicehash/sgminer/releases"><b>download</b></a><br />
SGminer Source <a href="https://github.com/nicehash/sgminer/releases"><b>download</b></a><br />
CCminer 1.2 (Nvidia - Compute 2.5+) <a href="https://github.com/cbuchner1/ccminer/releases/download/v1.2/ccminer-v1.2.zip"><b>download</b></a><br />
<br />
<h3>Configure your miner (Windows)</h3>
Create a `bat` file by opening the notepad and pasting one of the lines below that matches your setup. <br />
<br />
<h4>SGMiner</h4>
<pre><code>sgminer --kernel darkcoin-mod -o stratum+tcp://eu1.arcpool.com:1208 -u PBSFWKt583Xb5t92EPccWnXP2UHMTtCt5F -p x
sgminer --kernel darkcoin-mod -o stratum+tcp://gpuhot.com:3533 -u PBSFWKt583Xb5t92EPccWnXP2UHMTtCt5F -p c=AXE
sgminer --kernel darkcoin-mod -o stratum+tcp://cryptonova.eu:3533 -u PBSFWKt583Xb5t92EPccWnXP2UHMTtCt5F -p c=AXE
sgminer --kernel darkcoin-mod -o stratum+tcp://smithpool.dynu.net:3533 -u PBSFWKt583Xb5t92EPccWnXP2UHMTtCt5F -p c=AXE
sgminer --kernel darkcoin-mod -o stratum+tcp://eu2.multipool.es:3542 -u PBSFWKt583Xb5t92EPccWnXP2UHMTtCt5F -p c=AXE</pre></code>
<h4>CCminer</h4>
<pre><code>ccminer -a x11 -o stratum+tcp://eu1.arcpool.com:1208 -u PBSFWKt583Xb5t92EPccWnXP2UHMTtCt5F -p x
ccminer -a x11 -o stratum+tcp://gpuhot.com:3533 -u PBSFWKt583Xb5t92EPccWnXP2UHMTtCt5F -p c=AXE
ccminer -a x11 -o stratum+tcp://cryptonova.eu:3533 -u PBSFWKt583Xb5t92EPccWnXP2UHMTtCt5F -p c=AXE
ccminer -a x11 -o stratum+tcp://smithpool.dynu.net:3533 -u PBSFWKt583Xb5t92EPccWnXP2UHMTtCt5F -p c=AXE
ccminer -a x11 -o stratum+tcp://eu2.multipool.es:3542 -u PBSFWKt583Xb5t92EPccWnXP2UHMTtCt5F -p c=AXE</pre></code>
You then need to change -u <code>PBSFWKt583Xb5t92EPccWnXP2UHMTtCt5F</code> to reflect your own address. Replace <code>stratum+tcp://POOLADDRESS:PORT</code> to another pool if needed. Finally, go to "File > Save as" and save the file as `start.bat` in the same folder containing your miners application files. You are now ready to mine, double click on <code>start.bat</code> to start the operation.<br />
<br />
<section><h2 class="major">ASIC</h2>
Connect to your ASIC miner and enter values according to the following sample:<br />
<br />
<pre><code>Url: POOLADDRESS:PORT
Worker: WALLETADDRESS
Password: X</pre></code></section>
