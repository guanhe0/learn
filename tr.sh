#!/bin/bash
cur_path=`pwd`
if [ "$cur_path"x = "/root/tmp1"x ];then
	cd ../tmp2;tar xf CentOS_ARM64.tar.gz;cd ../tmp3;tar xf Debian_ARM64.tar.gz;cd ../tmp4;tar xf Fedora_ARM64.tar.gz;cd ../tmp5;tar xf OpenSuse_ARM64.tar.gz;cd ../tmp6;tar xf Ubuntu_ARM64.tar.gz
else
	echo 'error path'
	exit
fi
