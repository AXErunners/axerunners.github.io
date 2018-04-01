---
layout: post
title: "electrumx server"
date: 2018-04-01
excerpt: "Deployment of ElectrumX SPV server"
tags: [linux, guide, backend, spv]
comments: true
project: true
---
## How to deploy electrumx server for AXE SPV protocol.

The current version of electrumx requires precise system configuration and is not fully automated for fast deployment. The script below is used for fast and easy setup of electrumx server on working AXE core node.

To start, input following line:
```
wget https://raw.githubusercontent.com/bauerj/electrumx-installer/master/bootstrap.sh -O - | bash`
```

Follow the instructions and finish the configuration
