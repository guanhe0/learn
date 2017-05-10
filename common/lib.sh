#!/bin/bash
sys_info=$(uname -a)
distro=''
if [ "$(echo $sys_info | grep -E 'UBUNTU|Ubuntu|ubuntu')"x != ""x ];then
    distro="ubuntu"
elif [ "$(echo $sys_info | grep -E 'cent|CentOS|centos')"x != ""x ];then
    distro="centos"
elif [ "$(echo $sys_info | grep -E 'fed|Fedora|fedora')"x != ""x ];then
    distro="fedora"
elif [ "$(echo $sys_info | grep -E 'DEB|Deb|deb')"x != ""x ];then
    distro="debian"
elif [ "$(echo $sys_info | grep -E 'OPENSUSE|OpenSuse|opensuse')"x != ""x ];then
    distro="opensuse"
else
    distro="ubuntu"
fi

case $distro in
    "ubuntu"|"debian")
    install_commands='apt-get install -y'
    ;;
    "opensuse")
    install_commands="zypper -n instal"  
    ;;
    "centos")
    install_commands="yum install -y"
    ;;
    "fedora")
    install_commands="dnf install -y"
    ;;
esac



