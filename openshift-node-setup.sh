#!/bin/bash

# install packages
yum install -y wget vim git net-tools bind-utils yum-utils iptables-services bridge-utils bash-completion kexec-tools sos pcacct
yum install -y epel-release
yum install -y ansible pyOpenSSL

# fetch git repo
cd ~
git clone https://github.com/openshift/openshift-ansible
cd openshift-ansible
git checkout release-3.11

# install docker
yum install -y docker-1.13.1
