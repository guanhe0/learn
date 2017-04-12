---
title: override_deploy.md
date: 2017-01-12 14:06:58
tags:
---
本文档记录的步骤是参考[Deploy_Manual.overdrive.md](https://github.com/open-estuary/estuary/blob/master/doc/Deploy_Manual.overdrive.md#3.3)步骤执行记录写成,执行的时候主要参考此文档
## 单板启动部分
```
ssh <user>@114.119.4.74 -p 222
```
在本地机器登录BoardServer2
````
board_list 查看已分配的板子哪块是override类型的，序号n
board_reboot n
board_connect n
````
board_connect 启动会遇到
```
ser2net port 20050 device /dev/ttyUSB0 [115200 N81] (Debian GNU/Linux)，
```
很久，如果时间过长，按ctr + ] 再按q退出，重新board_reboot ,board_connect，直到出现
```
boot firware ***, 
```
如果已经进入了系统，board_reboot不起作用，但是board_connect后按回车会进入系统，这是因为bmc没有重新上电，联系姚岚处理
这里会花2-3分钟，出现跳转的时候会提示按 Delete而不是数字键的Del，按下出现bios界面，后面按Deploy_Manual.overdrive.md操作

***
## grub.cfg 配置部分
```
grub.cfg 里set root=(tftp,194.168.1.107) 
```
指定的根目录在/etc/default/tftpd-hpa 定义
我的是TFTP_DIRECTORY="/home/hisilicon/ftp"
````
在grub.cfg里的/Image  对应/home/hisilicon/ftp/Image
mini-rootfs.cpio.gz 类似

在已经启动的系统里通过reboot重启，不会重新加载grub.cfg
````
***
## (SAS)启动部分
先通过nfs启动overdrive pxe mini系统 因为mini系统不支持mkfs.vfat，mkfs.ext4,略过sudo mkfs.vfat /dev/sda1,sudo mkfs.ext4 /dev/sda2，启动其他系统做格式化
我这里启动ubuntu，执行mkfs.vfat /dev/sda1,sudo mkfs.ext4 /dev/sda2成功
***
## 在BoardServer2解压发行版到ftp目录
```
目前因为没有sudo权限，所以执行的解压发行版会出错，fedora和centos可以不用sudo权限，
其他发行版是需要sudo权限的人才可以解压的
```

```
如果是选择硬盘启动，到grub之后，在Save and Exit 选择UEFI build in shell ,就可以了
```
## 文件部署需要的文件来源
部署系统的文件比如(v3.0-rc0)可以从下面去找
````
在BoardServer2登录 192.168.1.106
/home/chenshuangsheng/open-estuary/build/binary/arm64 是其一
/home/jarson/estuary-builds/v3.0-rc0其二
````

## SAS启动grub.cfg
```
以grub.cfg应该和Image同一个目录才有效
EFI/BOOT/bootaa64.efi
cd tmp2;tar xf CentOS_ARM64.tar.gz;cd ../tmp3;tar xf Debian_ARM64.tar.gz;cd ../tmp4;tar xf Fedora_ARM64.tar.gz;cd ../tmp5;tar xf OpenSuse_ARM64.tar.gz;cd ../tmp6;tar xf Ubuntu_ARM64.tar.gz
```

## 参考步骤
```
1,从buildserver下载tar.gz,Image.grubaa64.efi等文件到tftp
2,创建发行版目录并解压文件,
3，修改grub.cfg
4，nfs启动测试
5，sas启动测试
```
## 测试项目
```
1,cat /proc/cmdline
2,cat /proc/version
3,uname -a
4,df -h
5,ping www.baidu.com
6,apt-get update -y
7,apt-get install -y tree
8,fdisk -l
9,mkfs.ext4 /dev/sda6
```
