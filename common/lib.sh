#!/bin/bash
result=''
if [ -e /etc/redhat-release ];then
    result='yum'
fi 
echo $result
