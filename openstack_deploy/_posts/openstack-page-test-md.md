---
title: openstack-page-test.md
date: 2017-04-25 11:45:18
tags:
---
### 准备工作
[1]假设是在lab2上安装的openstack，需要把端口映射出来，才能通过网页访问

Demon website “http://124.250.134.52:4201/”

4201=4+ [board_no]

[2]下载虚拟机需要image文件 参考[cirros-d161201-aarch64-disk](https://download.cirros-cloud.net/daily/20161201/cirros-d161201-aarch64-disk.img)

[3]在demo-admin.rc 文件找到demo账户密码，也可以在nova-admin.rc找到admin帐号密码

[4]测试参考文档[UserManual.docx](https://raw.githubusercontent.com/wuyuer/packages-1/master/openstack/doc/UserManual.docx)
### 开始测试
参考文档UserManual.docx执行测试，分ORCHESTRATION，Compute，命令行三种方法
[1]补充上传镜像部分
![upload_image.png](../images/upload_image.png)
在弹出的Create An Image 对话框里填写相关信息
Minimum Disk (GB):默认，Minimum RAM (MB):默认
Architecture填写aarch64
format 选择QCOW2-QEMU
在3的地方选择下载好的image





