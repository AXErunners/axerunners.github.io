---
title: trading
image: dgma.jpg
---
<h3 class="major">Trading with BarterDEX</h3>
Download and install <a href="https://github.com/AXErunners/axe/releases/latest"><b>AXE</b></a> with other wallets you planning to trade with. While your wallets are syncing, download latest <b>BarterDEX</b> binaries <a href="https://github.com/KomodoPlatform/BarterDEX/releases">here</a>. When wallets are synced, close AXE core and edit <code>axe.conf</code> as in the example below (SPV clients should work without any configuration):
<br />
<pre><code>rpcuser=axerunner283723
rpcpassword=warp2178302
server=1
txindex=1
rpcbind=127.0.0.1
bind=127.0.0.1
rpcport=9337
port=9937</code></pre>
If needed, add necessary changes to another wallets.
<i>AXE core <code>native</code> with Bitcoin <code>electrum</code> mode will work out of the box.</i>
<hr class="hr-line">
<h3 class="major">First start</h3>
<figure>
	<a href="/assets/images/barterdex-btc-axe.png"><img src="/assets/images/barterdex-btc-axe.png" style="width: 100%;"></a>
	<figcaption>test trade on v1.0.2</figcaption>
</figure>
Open <b>BarterDEX</b> and generate your seed. This seed will be associated with your wallet's deposit address. Don't lose it, or you will not be able to access your deposits in watch-only addresses. If you are using AXE core, select <code>native</code> mode. For SPV wallets - use <code>electrum</code> mode. After adding your coins, click on <code>exchange</code>, select pairs you want to trade, and send your first order.
<section>
<ul class="alt">
<li><a href="https://komodoplatform.com/decentralized-exchange">Reference</a></li>
</ul>
</section>
