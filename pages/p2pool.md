---
title: p2pool
image: tmbr.jpg
---
<h2 class="major">Requirments</h2>
<li>axed >= 1.1.3</li>
<li>Python >= 2.7</li>
<li>Twisted >= 13.0.0</li>
<li>Zope.interface >= 3.8.0</li>
<br />
<h2 class="major">Automatic deployment</h2>
Create user <code>axerunner</code>:
<pre><code>adduser axerunner && usermod -aG sudo axerunner
su axerunner</pre></code>

Download and prepare deployment script:
<pre><code>cd ~
git clone https://github.com/charlesrocket/p2pool-axe-deploy
nano ./p2pool-axe-deploy/p2pool.deploy.sh</pre></code>

Edit the script to match your setup:
<li><code>PUBLIC_IP</code> your public IP address</li>
<li><code>EMAIL</code> your email address</li>
<li><code>PAYOUT_ADDRESS</code> your AXE wallet address to receive fees</li>
<li><code>USER_NAME</code> linux user name</li>
<li><code>RPCUSER</code> enter a random alphanumeric rpc user name</li>
<li><code>RPCPASSWORD</code> enter a random alphanumeric rpc password</li>
<br />
Start deployment script:
<pre><code>bash ./p2pool-axe-deploy/p2pool.deploy.sh</pre></code>

<h2 class="major">Manual deployment</h2>
After installing AXE core, open ports for p2pool:
<pre><code>sudo ufw allow 7903/tcp
sudo ufw allow 8999/tcp</pre></code>

Install dependencies:

<pre><code>sudo apt-get install python-zope.interface python-twisted python-twisted-web python-dev libncurses-dev
sudo apt-get install git python-zope.interface python-twisted python-twisted-web
sudo apt-get install gcc g++</pre></code>
Install p2pool:
<pre><code>cd ~ && git clone https://github.com/AXErunners/p2pool-axe.git
cd p2pool-axe && git submodule init && git submodule update
cd axe_hash && python setup.py install --user</pre></code>
Install front-end:
<pre><code>cd ..
mv web-static web-static.old
git clone https://github.com/justino/p2pool-ui-punchy web-static
mv web-static.old web-static/legacy
cd web-static
git clone https://github.com/johndoe75/p2pool-node-status status
git clone https://github.com/hardcpp/P2PoolExtendedFrontEnd ext</pre></code>
<br />
Start p2pool:
<pre><code>python run_p2pool.py --external-ip 256.271.13.349 -f 0 --give-author 0 -a PDAze8QNvLLQE5KS6FEfedmgTgs1uMCbf8X</pre></code>
<li><code>-f</code> pool fees</li>
<li><code>--give-author</code> donation</li>
<li><code>--external-ip</code> pool address</li>

You can access p2pool's stats with <code>http://256.271.13.349:7903/static/</code>
<hr class="hr-line">
For additional options:
<pre><code>python run_p2pool.py --help</pre></code>
<a href="https://github.com/AXErunners/p2pool-axe"><b>source</b></a> <br />
<a href="https://github.com/AXErunners/p2pool-axe-deploy"><b>deployment script</b></a><br />
