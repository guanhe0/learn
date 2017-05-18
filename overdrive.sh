#!/bin/bash
source common/lib.sh
echo "cat /proc/cmdline" > tmp.txt
cat /proc/cmdline >> tmp.txt
echo "cat /proc/version" >> tmp.txt
cat /proc/version >> tmp.txt
echo "uname -a" >> tmp.txt
uname -a >> tmp.txt
echo "df -h" >> tmp.txt
df -h
if [ $? -eq 0 ];then
   echo "[OK]" >> tmp.txt
else
   echo "[NO]" >> tmp.txt
fi
echo "ping www.baidu.com" >> tmp.txt
timeout 3 ping www.baidu.com
echo $?
if [ $? -ne 2 ];then
   echo "[OK]" >> tmp.txt
else
   echo "[NO]" >> tmp.txt
fi
echo "fdisk -l" >> tmp.txt
fdisk -l
if [ $? -eq 0 ];then
   echo "[OK]" >> tmp.txt
else
   echo "[NO]" >> tmp.txt
fi
echo "mkfs.ext4 /dev/sda6" >> tmp.txt
mkfs.ext4 /dev/sda6
if [ $? -eq 0 ];then
   echo "[OK]" >> tmp.txt
else
   echo "[NO]" >> tmp.txt
fi
echo "install tree" >> tmp.txt
$install_commands  tree
if [ $? -eq 0 ];then
   echo "[OK]" >> tmp.txt
else
   echo "[NO]" >> tmp.txt
fi
