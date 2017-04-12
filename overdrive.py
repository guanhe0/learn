#!/usr/bin/python
import os
os.system("cat /proc/cmdline")
os.system("cat /proc/version")
os.system("uname -a")
os.system("df -h")
os.system("timeout 5 ping www.baidu.com")
os.system("fdisk -l")
os.system("mkfs.ext4 --help")
os.system("apt-get install -y tree")
