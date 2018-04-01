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

Current version of electrumx requires precise system configuration and is not fully automated for fast deployment. Scrip below is used for fast and easy setup of electrumx on working AXE core machine.

To start, use the line
```
wget https://raw.githubusercontent.com/bauerj/electrumx-installer/master/bootstrap.sh -O - | bash`
```

Follow the instructions and finish the configuration
