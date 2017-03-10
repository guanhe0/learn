#!/bin/bash
username="guanhe"
passwd="Gah2016103"
server_ip="114.119.4.74"
server_port="218"
/usr/bin/expect <<EOF
spawn ssh $username@$server_ip -p $server_port
expect "passwd"
send $passwd
send "\n"
expect eof
EOF
