#!/usr/bin/python
import os
import platform
import time
import string
os.system("echo cat /proc/cmdline")
os.system("cat /proc/cmdline")
os.system("echo cat /proc/version")
os.system("cat /proc/version")
os.system("echo uname -a")
os.system("uname -a")
os.system("echo df -h")
os.system("df -h")
os.system("echo timeout 4 ping www.baidu.com")
os.system("timeout 5 ping www.baidu.com")
os.system("echo fdisk -l")
os.system("timeout 5 fdisk -l")
os.system("echo mkfs.ext4")
os.system("mkfs.ext4")
distro='ubuntu'
distro=str(platform.dist())
install='apt-get'
if ('Centos' in distro or 'centos' in distro):
    install='yum'
elif ('Debian' in distro or 'debian' in distro):
    install='apt-get'
elif ('Fedora' in distro or 'fedora' in distro):
    install='yum'
elif ('Opensuse' in distro or 'opensuse' in distro):
    install='zypper'
else:
    install='apt-get'
os.environ['install']=str(install)
os.system('echo  $install')
os.system("echo install -y tree")
os.system("$install install -y tree")
