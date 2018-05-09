---
title: electrum
image: axecore-ascii-screenshot.png
---
The current version of electrumx requires precise system configuration and is not fully automated for fast deployment. The script below is used for fast and easy setup of electrumx server on working AXE core node.

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
Add the ports in the firewall exception:<br />
```
sudo ufw allow 50001
sudo ufw allow 50002
```
Starting and stopping electrumx server:<br />
`service electrumx start`<br />
`service electrumx start`<br />

[source](https://github.com/kyuupichan/electrumx)
