---
title: mining
image: minerdedication.jpg
---
<h3 class="major">Download a miner</h3>
SGminer for Windows <a href="https://github.com/nicehash/sgminer/releases"><b>download</b></a><br />
SGminer Source <a href="https://github.com/nicehash/sgminer/releases"><b>download</b></a><br />
CCminer 1.2 (Nvidia - Compute 2.5+) <a href="https://github.com/cbuchner1/ccminer/releases/download/v1.2/ccminer-v1.2.zip"><b>download</b></a><br />
<br />
<h3>Create AXE address to receive payments</h3>
Download the <a href="https://github.com/AXErunners/axe/releases"><b>AXE core</b></a> client. Generate a new address and input it on your account page to receive payments.<br />
<br />
<h3>Configure your miner</h3>
If you want to mine on a Windows Operating System, then you'll need to create a batch file to start your miner.

Simply open notepad and then copy and paste the following:<br />
<br />
<h4>SGMiner</h4>
<pre><code>sgminer --kernel darkcoin-mod -o stratum+tcp://eu1.arcpool.com:1208 -u PBSFWKt583Xb5t92EPccWnXP2UHMTtCt5F -p x</pre></code>
<h4>CCminer</h4>
<pre><code>ccminer -a x11 -o stratum+tcp://eu1.arcpool.com:1208 -u PBSFWKt583Xb5t92EPccWnXP2UHMTtCt5F -p x
</pre></code>
You then need to change -u <code>PBSFWKt583Xb5t92EPccWnXP2UHMTtCt5F</code> to reflect your own address. Replace <code>stratum+tcp://eu1.arcpool.com:1208</code> to another pool if needed. Go to "File > Save as" and save the file as `start.bat` in the same folder containing your miners application files. You are now ready to mine, double click on <code>start.bat</code> to start mining.
