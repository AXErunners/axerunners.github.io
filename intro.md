---
title: masternodes
image: whtslft.jpg
---
<ul>
To start AXE masternode on a dedicated server you will need:
<li>1000 AXE collateral</li>
<li>server with Ubuntu (16.04) and static IP ([Vultr](https://www.vultr.com/?ref=7231821))</li>
<li>Axe Core on local machine</li>
<li>basic Linux skills</li>
</ul>
<ul>
<h4>Setup VPS</h4>
Switch to dedicated user AXERUNNER:
```
adduser axerunner
usermod -aG sudo axerunner
su axerunner
```
</ul>
<ul>
<h4>Prepare the system</h4>
Update operating system and install dependencies:

```
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install git python-virtualenv virtualenv fail2ban
sudo apt-get install ufw
sudo apt-get install build-essential libtool autotools-dev automake pkg-config libssl-dev libevent-dev bsdmainutils
sudo apt-get install libboost-all-dev
sudo add-apt-repository ppa:bitcoin/bitcoin
sudo apt-get update
sudo apt-get install libdb4.8-dev libdb4.8++-dev
sudo apt-get install libminiupnpc-dev libzmq3-dev
sudo ufw allow ssh/tcp
sudo ufw limit ssh/tcp
sudo ufw allow 9937/tcp
sudo ufw allow 9936/tcp
sudo ufw allow 9337/tcp
sudo ufw logging on
sudo ufw disable
sudo ufw enable
```
Add some swap:
```
fallocate -l 4G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
nano /etc/fstab
```
Enter the following file at the end:
`/swapfile none swap sw 0 0`
</ul>
<ul>
<h4>Install AXE on VPS</h4>
```
git clone https://github.com/axerunners/axe
cd axe && cd depends && make
cd .. && ./autogen.sh && ./configure --without-gui && make && sudo make install
axed -daemon
axe-cli stop
```
</ul>
<ul>
<h4>Build AXE on local machine</h4>
```
sudo apt-get install git build-essential libtool autotools-dev automake pkg-config libssl-dev libevent-dev bsdmainutils
sudo apt-get install libminiupnpc-dev
sudo apt-get install libzmq3-dev
sudo apt-get install libboost-all-dev
sudo add-apt-repository ppa:bitcoin/bitcoin
sudo apt-get update
sudo apt-get install libdb4.8-dev libdb4.8++-dev
git clone https://github.com/axerunners/axe
cd axe && cd depends && make
cd .. && ./autogen.sh && ./configure && make && sudo make install
axed -daemon
axe-cli stop
```
You could also download [binaries](https://github.com/AXErunners/axe/releases) instead of building the source.

Open your local Axe wallet (`axe-qt`)and let it sync with the network. After downloading the blockchain you can create masternode address with the key. Open debug console to enter `masternode genkey` and `getaccountaddress mn`. Send 1000 AXE to just generated `mn` address.

Edit `axe.conf` in your VPS datadir:
```
cd ~ && cd .axecore
nano axe.conf
```
Insert following:
```
#- - - -
rpcuser=XXX
rpcpassword=XXX
rpcallowip=127.0.0.1
rpcport=9337
#- - - -
listen=1
server=1
daemon=1
#- - - -
masternode=1
masternodeprivkey=XXX
externalip=XXX.XXX.XXX.XXX
```
<li>`rpcuser/password` might be random</li>
<li>`externalip` is your VPS static address</li>
<li>`masternodeprivkey` is generated with `masternode genkey`</li>
</ul>
<ul>
<h4>Finish local wallet setup</h4>
Go to your local datadir and edit masternode.conf to make it look like example below:
```
mn1 207.246.65.01:9937 93HaYBVUCYjEMezH1Y4sBGLALQZE1Yc1K64xiqgX37tGBDQL8Xg 7603c20a05258c208b58b0a0d77603b9fc93d47cfa403035f87f3ce0af814566 0
mn2 207.246.65.02:9937 92Da1aYg6sbenP6uwskJgEY2XWB5LwJ7bXRtc3UPeShtHWJDjDv 5d898e78244f3206e0105f421cdb071d91d111a51cd88eb5511fc0dbf4bfd95f 1
```
<li>`mn1` is the alias of your masternode</li>
<li>`207.246.65.01:9937` is the IP address of your VPS and Axe RPC port `9337`</li>
<li>`93HaYBVUCYjEMezH1Y4sBGLALQZE1Yc1K64xiqgX37tGBDQL8Xg` is your masternode private key</li>
<li>`5d898e78244f3206e0105f421cdb071d91d111a51cd88eb5511fc0dbf4bfd95f 1` is the mn transaction output from `masternode outputs`</li>
</ul>
<ul>
<h4>Install Sentinel on the VPS</h4>
```
sudo apt-get update
sudo apt-get install python-virtualenv
sudo apt-get install virtualenv
cd ~ && cd .axecore
git clone https://github.com/AXErunners/sentinel.git
cd sentinel
virtualenv venv
venv/bin/pip install -r requirements.txt
```
Now you need to add Sentinel to cron. Enter `crontab -e` and insert following line:
```
* * * * * cd /home/axerunner/.axecore/sentinel && ./venv/bin/python bin/sentinel.py 2>&1 >> sentinel-cron.log
```
Save changes and close editor with <kbd>esc</kbd> <kbd>:</kbd><kbd>w</kbd><kbd>q</kbd>
Check Sentinel:
```
venv/bin/python bin/sentinel.py
```
If the node still syncing - you will see "axed not synced with network! awaiting full sync before running Sentinel.

Wait until the process is finished (check status with axe-cli mnsync status). After the wallet will download the blockchain, test Sentinel again with venv/bin/python bin/sentinel.py. If nothing's returned - Sentinel is working properly.
</ul>
<ul>
<h4>Start your masternode</h4>
Go to your local wallet's masternode tab (on/off switch in Options) and start your masternode.

If your node shows `WATCHDOG EXPIRED` status - this usually indicates an issue with Sentinel. Check the schedule with `crontab -e` and give it a few hours. It might take a few hours for masternode to switch to `ENABLED`.
</ul>
