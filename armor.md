---
title: armor
date: 2017-01-10 14:29:24
tags:
---
### functions.sh 常用函数提供通用信息和错误输出功能
### parameters.sh 提供参数解析功能
### test_awk.sh 测试awk工具 逐行打印/proc/misc里的内容
````
执行test_awk.sh 部分打印
command awk -W version [PASS]
awk - data extraction and reporting tool
229 fuse
234 btrfs-control
 58 memory_bandwidth
 59 network_throughput
 60 network_latency
 61 cpu_dma_latency
236 device-mapper
200 tun
221 mpt2ctl
222 mpt3ctl
 62 pktcdvd
237 loop-control
183 hw_random
235 autofs
231 snapshot
232 kvm
 63 vga_arbiter
````
### test_blktrace.sh
首次执行./test_blktrace.sh
````
./test_blktrace.sh: line 12: blktrace: command not found
Command blktrace -v [FAIL]
````

安装blktrace
````
$apt-get install blktrace -y
Reading package lists... Done
Building dependency tree
Reading state information... Done
You might want to run 'apt-get -f install' to correct these:
The following packages have unmet dependencies:
 blktrace : Depends: libaio1 (>= 0.3.93) but it is not going to be installed
            Recommends: libtheora-bin but it is not going to be installed
            Recommends: libav-tools but it is not going to be installed
            Recommends: librsvg2-bin but it is not going to be installed
 libc6-dbg : Depends: libc6 (= 2.21-0ubuntu4) but 2.23-0ubuntu3 is to be installed
 libc6-dev : Depends: libc6 (= 2.21-0ubuntu4) but 2.23-0ubuntu3 is to be installed
             Depends: libc-dev-bin (= 2.21-0ubuntu4) but 2.23-0ubuntu3 is to be installed
 libpython3.4 : Depends: libpython3.4-stdlib (= 3.4.3-3) but it is not installable
E: Unmet dependencies. Try 'apt-get -f install' with no packages (or specify a solution).
````
```bash
sudo apt-get update -y
```
还是没用,添加以下两行到/etc/apt/source.list
````
deb http://ftp.cn.debian.org/debian sid main
deb http://ftp.cn.debian.org/debian jessie-backports main
````
再更新，还是
````
Reading package lists... Done
Building dependency tree
Reading state information... Done
You might want to run 'apt-get -f install' to correct these:
The following packages have unmet dependencies:
 libc6-dbg : Depends: libc6 (= 2.21-0ubuntu4) but 2.23-0ubuntu3 is to be installed
 libc6-dev : Depends: libc6 (= 2.21-0ubuntu4) but 2.23-0ubuntu3 is to be installed
             Depends: libc-dev-bin (= 2.21-0ubuntu4) but 2.23-0ubuntu3 is to be installed
 libpython3.4 : Depends: libpython3.4-stdlib (= 3.4.3-3) but it is not installable
E: Unmet dependencies. Try 'apt-get -f install' with no packages (or specify a solution).
````
按照提示，执行apt-get -f install,中间有promt选择yes

测试一下安装包是否安装好apt-get install -y tree
````
E: There were unauthenticated packages and -y was used without --allow-unauthenticated
````
不成功，按照提示
````
apt-get install -y tree --allow-unauthenticated
````
ok,tree安装成功; 该去安装 blktrace
````
apt-get install -y blktrace
````
提示
````
E: There were unauthenticated packages and -y was used without --allow-unauthenticated
````
按照提示
````
apt-get install -y blktrace --allow-unauthenticated
````
安装成功
$blktrace version 2.0.0
blktrace version 2.0.0

再次执行./test_blktrace.sh
````
blktrace version 2.0.0
Command blktrace  -v [PASS]
blktrace -d /dev/sda -w 3
=== sda ===
  CPU  0:                    0 events,        0 KiB data
  CPU  1:                    0 events,        0 KiB data
  CPU  2:                    0 events,        0 KiB data
  CPU  3:                    0 events,        0 KiB data
  CPU  4:                    0 events,        0 KiB data
  CPU  5:                    0 events,        0 KiB data
  CPU  6:                    0 events,        0 KiB data
  CPU  7:                    0 events,        0 KiB data
  CPU  8:                    0 events,        0 KiB data
  CPU  9:                    1 events,        1 KiB data
  CPU 10:                    0 events,        0 KiB data
  CPU 11:                    0 events,        0 KiB data
  CPU 12:                    0 events,        0 KiB data
  CPU 13:                    0 events,        0 KiB data
  CPU 14:                    0 events,        0 KiB data
  CPU 15:                    0 events,        0 KiB data
  Total:                     1 events (dropped 0),        1 KiB data
Command blktrace -d /dev/sda -w 3 [PASS]
````
在当前目录生成
````
sda.blktrace.0   sda.blktrace.12  sda.blktrace.2  sda.blktrace.6
sda.blktrace.1   sda.blktrace.13  sda.blktrace.3  sda.blktrace.7
sda.blktrace.10  sda.blktrace.14  sda.blktrace.4  sda.blktrace.8
sda.blktrace.11  sda.blktrace.15  sda.blktrace.5  sda.blktrace.9
````

执行test_crash.sh This script tests the crash tool.
````
crash 7.1.3
Copyright (C) 2002-2014  Red Hat, Inc.
Copyright (C) 2004, 2005, 2006, 2010  IBM Corporation
Copyright (C) 1999-2006  Hewlett-Packard Co
Copyright (C) 2005, 2006, 2011, 2012  Fujitsu Limited
Copyright (C) 2006, 2007  VA Linux Systems Japan K.K.
Copyright (C) 2005, 2011  NEC Corporation
Copyright (C) 1999, 2002, 2007  Silicon Graphics, Inc.
Copyright (C) 1999, 2000, 2001, 2002  Mission Critical Linux, Inc.
This program is free software, covered by the GNU General Public License,
and you are welcome to change it and/or distribute copies of it under
certain conditions.  Enter "help copying" to see the conditions.
This program has absolutely no warranty.  Enter "help warranty" for details.

GNU gdb (GDB) 7.6
Copyright (C) 2013 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.  Type "show copying"
and "show warranty" for details.
This GDB was configured as "aarch64-unknown-linux-gnu".

Command crash -v [PASS]
No futher tests for crash tool are suppoted now
````

执行test_df.sh This script tests the df tool
````
df (GNU coreutils) 8.25
Copyright (C) 2016 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Written by Torbjorn Granlund, David MacKenzie, and Paul Eggert.
command df --v  [PASS]
df - display informaton on the file systems with their mount points, memory usage
Filesystem                                       1K-blocks      Used  Available Use% Mounted on
192.168.1.107:/home/hisilicon/ftp/guanhe/Ubuntu 2110744672 785506568 1217995404  40% /
devtmpfs                                          66989952         0   66989952   0% /dev
tmpfs                                             66990656         0   66990656   0% /dev/shm
tmpfs                                             66990656     18432   66972224   1% /run
tmpfs                                                 5120         0       5120   0% /run/lock
tmpfs                                             66990656         0   66990656   0% /sys/fs/cgroup
tmpfs                                                  128         0        128   0% /run/lxcfs/controllers
tmpfs                                             13398144         0   13398144   0% /run/user/0
command df [PASS]
````

执行test_dmidecode.sh 这个脚本测试dmidecode工具
````
Dmidecode 遵循 SMBIOS/DMI 标准
其输出的信息包括 BIOS、系统、主板、处理器、内存、缓存等等
````

执行test_dstat.sh 
````
./test_dstat.sh: line 12: dstat: command not found
Command dstat -v [FAIL]
````
安装dstat apt-get install -y dstat
````
E: Could not get lock /var/lib/dpkg/lock - open (11: Resource temporarily unavailable)
E: Unable to lock the administration directory (/var/lib/dpkg/), is another process using it?
````
出现这个问题可能是有另外一个程序正在运行，导致资源被锁不可用。而导致资源被锁的原因可能是上次运行安装或更新
没有正常完成，进而出现此状况，解决的办法
````
rm /var/cache/apt/archives/lock
rm /var/lib/dpkg/lock
````
再安装apt-get install -y dstat
````
E: dpkg was interrupted, you must manually run 'sudo dpkg --configure -a' to correct the problem.
````
按照提示
````
sudo dpkg --configure -a
````
打印
````
Setting up libapt-inst2.0:arm64 (1.2.15ubuntu0.2) ...
Setting up libisc160:arm64 (1:9.10.3.dfsg.P4-8ubuntu1.2) ...
Setting up libssl1.0.0:arm64 (1.0.2g-1ubuntu4.5) ...
Setting up libisc-export160 (1:9.10.3.dfsg.P4-8ubuntu1.2) ...
Processing triggers for mime-support (3.59ubuntu1) ...
Processing triggers for ureadahead (0.100.0-19) ...
Setting up linux-headers-4.4.0-57 (4.4.0-57.78) ...
Setting up apt-utils (1.2.15ubuntu0.2) ...
Setting up tzdata (2016j-0ubuntu0.16.04) ...

Current default time zone: 'Etc/UTC'
Local time is now:      Tue Jan 10 08:39:01 UTC 2017.
Universal Time is now:  Tue Jan 10 08:39:01 UTC 2017.
Run 'dpkg-reconfigure tzdata' if you wish to change it.

Setting up libdns-export162 (1:9.10.3.dfsg.P4-8ubuntu1.2) ...
Setting up python3-problem-report (2.20.1-0ubuntu2.4) ...
Setting up linux-image-4.4.0-57-generic (4.4.0-57.78) ...
Running depmod.
depmod: ERROR: fstatat(4, .missing-syscalls.d.dpkg-new): No such file or directory
depmod: ERROR: fstatat(4, .config.old.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, watchdog.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, ftl.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, hsr.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, quotactl.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, migration.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, jme.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, compat.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, rxkad.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, ddr.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, iwlegacy.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, happymeal.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, ad7606.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, fmc.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, ad7816.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, smsc911x.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, comedi.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, pm.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, auto.conf.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, adm8211.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, ipv6.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, dmi.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, ixgb.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, mmu.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, isdn.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, pwm.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, dlm.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, adis16209.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, signature.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, mmc.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, mt7601u.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, printer.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, tipc.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, ath5k.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, snd.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, xfrm.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, igbvf.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, vhost.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, echo.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, dl2k.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, ircomm.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, pnp.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, libfdt.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, hz.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, cmdline.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, aio.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, fealnx.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, bql.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, mcb.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, hidraw.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, igb.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, devport.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, cm36651.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, lib80211.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, stk3310.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, ad799x.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, acpi.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, smsc9420.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, rtl8192u.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, adis16400.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, ad5380.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, ad5064.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, w1.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, ad5504.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, profiling.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, rt2400pci.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, lapbether.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, mailbox.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, btt.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, adis16136.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, nftl.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, spi.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, serio.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, phantom.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(7, intel8x0.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(7, pcm.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(7, dice.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(7, ice1724.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(7, ctxfi.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(7, als300.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(7, portman2x4.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(7, mtpav.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(7, darla20.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(7, mia.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(7, rme32.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(7, spi.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(7, es1938.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(7, pci.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(7, layla24.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(7, virmidi.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(7, au8810.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(7, korg1212.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(7, vx222.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(6, dql.h.dpkg-new): No such file or directory
depmod: ERROR: fstatat(4, .config.dpkg-new): No such file or directory
update-initramfs: deferring update (hook will be called later)
Examining /etc/kernel/postinst.d.
run-parts: executing /etc/kernel/postinst.d/apt-auto-removal 4.4.0-57-generic /boot/vmlinuz-4.4.0-57-generic
dpkg-query: error: parsing file '/var/lib/dpkg/updates/0223' near line 0:
 newline in field name '#padding'
dpkg-query: error: parsing file '/var/lib/dpkg/updates/0223' near line 0:
 newline in field name '#padding'
run-parts: executing /etc/kernel/postinst.d/initramfs-tools 4.4.0-57-generic /boot/vmlinuz-4.4.0-57-generic
update-initramfs: Generating /boot/initrd.img-4.4.0-57-generic
cryptsetup: WARNING: could not determine root device from /etc/fstab
Warning: root device  does not exist

Press Ctrl-C to abort build, or Enter to continue
````
按照提示按Ctrl-C
````
^Cdpkg: error processing package initramfs-tools (--configure):
 subprocess installed post-installation script was interrupted
Processing triggers for libc-bin (2.24-8) ...
dpkg: error: failed to remove my own update file /var/lib/dpkg/updates/0000: No such file or directory
r
````
网上搜索，试这个
dpkg --configure -a
没有解决
apt-get update -y 出现以下错误
````
W: GPG error: http://ftp.cn.debian.org/debian sid InRelease: The following signatures couldn't be verified because the public key is not available: NO_PUBKEY 8B48AD6246925553  NO_PUBKEY 7638D0442B90D010
````
网上搜索，试这个
````
wget -q http://drbl.nchc.org.tw/GPG-KEY-DRBL -O- | sudo apt-key add -
````
出现以下错误
````
Usage: apt-key [--keyring file] [command] [arguments]Y-DRBL -O- | sudo apt-key -

Manage apt's list of trusted keys

  apt-key add <file>          - add the key contained in <file> ('-' for stdin)
  apt-key del <keyid>         - remove the key <keyid>
  apt-key export <keyid>      - output the key <keyid>
  apt-key exportall           - output all trusted keys
  apt-key update              - update keys using the keyring package
  apt-key net-update          - update keys using the network
  apt-key list                - list keys
  apt-key finger              - list fingerprints
  apt-key adv                 - pass advanced options to gpg (download key)

If no specific keyring file is given the command applies to all keyring files.
````
网上搜索，试这个
````
gpg --keyserver subkeys.pgp.net --recv-key 8B48AD6246925553

````
出现以下错误
````
gpg: requesting key 46925553 from hkp server subkeys.pgp.net
gpg: keyserver timed out
gpg: keyserver receive failed: keyserver error
````


### test_du.sh

