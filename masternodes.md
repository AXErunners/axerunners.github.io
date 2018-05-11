---
title: masternodes
image: whtslft.jpg
---
<ul>
To start AXE masternode on a dedicated server you will need:
<li>1000 AXE collateral</li>
<li>server with Ubuntu (18.04) and static IP (<a href="https://www.vultr.com/?ref=7231821">Vultr</a>)</li>
<li>Axe Core on local machine</li>
<li>basic Linux skills</li>
</ul>
<ul>
<h4>Setup VPS</h4>
Switch to dedicated user AXERUNNER:
<pre><code>adduser axerunner
usermod -aG sudo axerunner
su axerunner</pre></code>
</ul>
<ul>
<h3 class="major">Prepare the system</h3>
Update operating system and install dependencies:
<pre><code>sudo apt-get update
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
sudo ufw enable</code>
Add some swap:
<code>fallocate -l 4G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
nano /etc/fstab</pre></code>
<br />
Enter the following file at the end:
<code>/swapfile none swap sw 0 0</code>
</ul>
<ul>
<h4 class="major">Install AXE on VPS</h4>
<pre><code>git clone https://github.com/axerunners/axe
cd axe && cd depends && make
cd .. && ./autogen.sh && ./configure --without-gui && make && sudo make install
axed -daemon
axe-cli stop
</pre></code>
</ul>
<ul>
<h4 class="major">Build AXE on local machine</h4>
<pre><code>sudo apt-get install git build-essential libtool autotools-dev automake pkg-config libssl-dev libevent-dev bsdmainutils
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
axe-cli stop</pre></code>
You could also download <a href="https://github.com/AXErunners/axe/releases">binaries</a> instead of building the source.
<ul>
Open your local Axe wallet (<code>axe-qt</code>)and let it sync with the network. After downloading the blockchain you can create masternode address with the key. Open debug console to enter <code>masternode genkey</code> and <code>getaccountaddress mn</code>. Send 1000 AXE to just generated <code>mn</code> address.
</ul>
Then edit <code>axe.conf</code> in your VPS datadir:
<pre><code>cd ~ && cd .axecore
nano axe.conf</pre></code>
Insert following:
<pre><code>#- - - -
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
externalip=XXX.XXX.XXX.XXX</pre></code>
<li><code>rpcuser/password</code> might be random</li>
<li><code>externalip</code> is your VPS static address</li>
<li><code>masternodeprivkey</code> is generated with <code>masternode genkey</code></li>
</ul>
<ul>
<h4 class="major">Finish local wallet setup</h4>
Go to your local datadir and edit <code>masternode.conf</code> to make it look like example below:
<pre><code>mn1 207.246.65.01:9937 93HaYBVUCYjEMezH1Y4sBGLALQZE1Yc1K64xiqgX37tGBDQL8Xg 7603c20a05258c208b58b0a0d77603b9fc93d47cfa403035f87f3ce0af814566 0
mn2 207.246.65.02:9937 92Da1aYg6sbenP6uwskJgEY2XWB5LwJ7bXRtc3UPeShtHWJDjDv 5d898e78244f3206e0105f421cdb071d91d111a51cd88eb5511fc0dbf4bfd95f 1</pre></code>
<li><code>mn1</code> is the alias of your masternode</li>
<li><code>207.246.65.01:9937</code> is the IP address of your VPS and Axe RPC port <code>9337</code></li>
<li><code>93HaYBVUCYjEMezH1Y4sBGLALQZE1Yc1K64xiqgX37tGBDQL8Xg</code> is your masternode private key</li>
<li><code>5d898e78244f3206e0105f421cdb071d91d111a51cd88eb5511fc0dbf4bfd95f 1</code> is the mn transaction output from <code>masternode outputs</code></li>
</ul>
<ul>
<h4 class="major">Install Sentinel on the VPS</h4>
<pre><code>sudo apt-get update
sudo apt-get install python-virtualenv
sudo apt-get install virtualenv
cd ~ && cd .axecore
git clone https://github.com/AXErunners/sentinel.git
cd sentinel
virtualenv venv
venv/bin/pip install -r requirements.txt</pre></code>
Now you need to add Sentinel to cron. Enter <code>crontab -e</code> and insert following line:
<pre><code>* * * * * cd /home/axerunner/.axecore/sentinel && ./venv/bin/python bin/sentinel.py 2>&1 >> sentinel-cron.log</pre></code>
<ul>Save changes and close editor with <strong>esc</strong> <strong>:</strong><strong>w</strong><strong>q</strong></ul>

<h4 class="major">Check Sentinel</h4>
<pre><code>venv/bin/python bin/sentinel.py</pre></code>
If the node still syncing - you will see "axed not synced with network! awaiting full sync before running Sentinel"

Wait until the process is finished (check status with <code>axe-cli mnsync status</code>). After the wallet will download the blockchain, test Sentinel again with <code>venv/bin/python bin/sentinel.py</code>. If nothing's returned - Sentinel is working properly.
</ul>
<ul>
<h4 class="major">Start your masternode</h4>
Go to your local wallet's masternode tab (on/off switch in Options) and start your masternode.

If your node shows <code>WATCHDOG EXPIRED</code> status - this usually indicates an issue with Sentinel. Check the schedule with <code>crontab -e</code> and give it a few hours. It might take a few hours for masternode to switch to <code>ENABLED</code>.
</ul>
