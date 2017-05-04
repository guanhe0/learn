###部署部分
sas 部署centos ubuntu
操作步骤参考：https://github.com/open-estuary/estuary/blob/master/doc/Deploy_Manual.4D03.md
发行版+内核：guanhe@EstBuildSvr1:/home/chenshuangsheng/open-estuary/build/binary/QEMU
img镜像：guanhe@EstBuildSvr1:/home/chenshuangsheng/open-estuary/build/distro



###运行脚本
安装pexpect 
如果安装pexpect失败 参考https://github.com/guanhe0/test-definitions-1/tree/estuary-dev/automated/README.md
安装pip后，pip install pexpect
qemu操作文档步骤：https://github.com/jarsonfang/etesting/blob/develop/source/_posts/kvm.md

###qemu.sh
[1]git clone https://github.com/luckyxinshidai/test-definitions.git https://github.com/guanhe0/test-definitions-1.git
cd ./test-definitions
. ./automated/bin/setenv.sh

[2]yum update -y
[3]yum install -y epel-release
[4]yum install -y python-pip
[5]test-runner -h
[6]pip install -r ${REPO_PATH}/automated/utils/requirements.txt
[7]pip install pexpect
