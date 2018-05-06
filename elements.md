---
title: core
image: axecore-ascii-screenshot.png
---
<h2>Deployment</h2>
Following guide covers AXE core compilation and was tested on Ubuntu 18.04.
<blockquote>To update the current client with a fresh version you need to shut down current AXE client with `axe-cli stop` before using any gists.</blockquote>
<h3>Prepare the system</h3>
Update operating system and install dependencies:
```
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install git python-virtualenv virtualenv fail2ban ufw -y
sudo apt-get install build-essential libtool autotools-dev automake pkg-config libssl-dev libevent-dev bsdmainutils -y
sudo apt-get install libqt5gui5 libqt5core5a libqt5dbus5 qttools5-dev qttools5-dev-tools libprotobuf-dev protobuf-compiler -y
sudo apt-get install libboost-all-dev libminiupnpc-dev libzmq3-dev libqrencode-dev -y
sudo add-apt-repository ppa:bitcoin/bitcoin
sudo apt-get update
sudo apt-get install libdb4.8-dev libdb4.8++-dev -y
```
<h3>Install AXE core and launch the client</h3>

Use the one-liner to install AXE core:

```
wget https://gist.github.com/charlesrocket/f5331e54b47344b6957781bbbea8dc33/raw/17e4d3d1ce8ee5e45b5b022c32d7fa2616ba5643/axecore.sh && bash axecore.sh
```

Now start GUI client with `axe-qt` or headless version with `axed`.<br />
<br />
<hr class="hr-line">
<h2>Gist examinations</h2>
<h3>Local</h3>

AXE core one-liner gist downloads master branch, performs dependencies build, system configuration, compilation with standard parameters and installation info `bin` folder. Perfect for fresh systems.

* `git clone` - downloads the source code
* `./autogen` - preparing system for the source code compilation
* `./configure` - preparing environment
* `make` - build process
* `sudo make install` - copies binaries into `bin` folder for quick launch (`axed`/`axe-qt`/etc can be called from any directory) _optional_

{% gist f5331e54b47344b6957781bbbea8dc33 %}

<h3>Server</h3>

AXE core one-liner for VPS will perform same tasks but with the **headless** flag (there is no need for GUI on the server machine). You can ignore **Qt** dependencies and call the gist with:
```
wget https://gist.github.com/charlesrocket/675ae3d744aed0d06852fc1dbf6f4739/raw/b9f09174e055a96880e27dfeba8bdff994c03225/axecore-vps.sh && bash axecore-vps.sh
```
{% gist 675ae3d744aed0d06852fc1dbf6f4739 %}

<h2>Outro</h2>
For additional services check with [Masternodes](/masternode-vps) or [p2pool](/mining.md) section.
