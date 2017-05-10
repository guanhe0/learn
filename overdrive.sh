#!/bin/bash
set -x
source common/lib.sh
cat /proc/cmdline
cat /proc/version
uname -a
df -h
timeout 3 ping www.baidu.com
fdisk -l
mkfs.ext4 /dev/sda6
$install_command  tree
