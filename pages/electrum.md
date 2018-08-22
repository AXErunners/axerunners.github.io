---
title: electrum
image: cntrls.jpg
---
<section>
<h2 class="major">electrum-axe</h2>
<section><ul class="actions">
<li><a href="https://github.com/AXErunners/electrum-axe/releases/latest" class="button icon fa-download">binaries</a></li>
</ul>
</section>
Electrum-AXE is a lightweight client for AXE network. Check with AXE <a href="https://github.com/AXErunners/axe/wiki/SPV">wiki</a> for more details. The source code is available at @AXErunners' GitHub <a href="https://github.com/AXErunners/electrum-axe">repository</a>.<br />
<br />
<figure>
	<a href="https://raw.githubusercontent.com/AXErunners/media/master/etc/electrum-axe-v322macos-scrnsht.png"><img src="https://raw.githubusercontent.com/AXErunners/media/master/etc/electrum-axe-v322macos-scrnsht.png" alt="electrum-axe on macOS" style="width: 95%;"></a>
	<figcaption>Electrum-AXE on macOS</figcaption>
</figure>
<figure>
	<a href="https://raw.githubusercontent.com/AXErunners/media/master/etc/electrum-axe-wzd-seed-v322macos-scrnsht.png"><img src="https://raw.githubusercontent.com/AXErunners/media/master/etc/electrum-axe-wzd-seed-v322macos-scrnsht.png" alt="Install wizard" style="width: 65%;"></a>
	<figcaption>Install wizard</figcaption>
</figure>
<figure>
	<a href="https://raw.githubusercontent.com/AXErunners/media/master/etc/electrum-axe-wzd-v322macos-scrnsht.png"><img src="https://raw.githubusercontent.com/AXErunners/media/master/etc/electrum-axe-wzd-v322macos-scrnsht.png" alt="Install wizard" style="width: 65%;"></a>
	<figcaption>Install wizard</figcaption>
</figure>
</section>
<h3>Usage</h3>
Download binaries or follow this <a href="https://github.com/AXErunners/electrum-axe#getting-started">guide</a> to install Electrum-AXE from source on your system.
<br />
<h2 class="major">electrumx</h2>
ElectrumX is a server-side application for AXE <a href="https://github.com/AXErunners/axe/wiki/SPV">SPV</a> protocol. The current version requires precise system configuration and is not fully automated for fast deployment. The script below is used for fast and easy setup of electrumx server on working AXE core node.

To start, input following line:
```
wget https://raw.githubusercontent.com/bauerj/electrumx-installer/master/bootstrap.sh -O - | bash
```

Finish the configuration by adding your AXE node's RPC login/pass in DAEMON_URL as `user:pass@<VPS IP>:<RPCPORT>/`

Sample:
```
# REQUIRED
DB_DIRECTORY = /db
# AXE node RPC credentials
DAEMON_URL = axerunner:m3hk86m8vw@144.202.40.33:9337/
DB_ENGINE=rocksdb
SSL_CERTFILE=/etc/electrumx/server.crt
SSL_KEYFILE=/etc/electrumx/server.key
TCP_PORT=50001
SSL_PORT=50002
# Listen on all interfaces:
HOST=91.65.291.42
COIN=AXE

#BANNER_FILE = /etc/electrumx/electrum.banner
#Uncomment the above line if you want to have a banner and create the banner file
```
Add the ports in the firewall exception:
```
sudo ufw allow 50001
sudo ufw allow 50002
```
<h3>Launch</h3>
Starting and stopping electrumx server<br>
`service electrumx start`<br>
`service electrumx start`<br>

[source](https://github.com/kyuupichan/electrumx)
