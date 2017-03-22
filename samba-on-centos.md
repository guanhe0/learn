---
title: samba-on-debian
date: 2016-11-21 14:39:23
tags:
---
**step 0**
install samba smbclient expect
````
sudo apt-get install -y samba smbclient expect
````

**step 1**
define varlue that need below
````
USER="guanhe"
PASSWD="123456"
NEW_DIR="share"
CONF_FILE="/etc/samba/smb.conf"
````

**step 2**
delete the test user if exist
````
USER=guanhe
egrep "^$USER" /etc/passwd
if [ $? -eq 0 ];then
deluser $USER
fi
````
**step 3**
add test user by expect 
````
/usr/bin/expect << EOD
set timeout 10
spawn adduser $USER
expect "password:"
send "$PASSWD\n"
expect "password:"
send "$PASSWD\n"
expect "Full Name"
send "\n"
expect "Room Number"
send "\n"
expect "Work Phone"
send "\n"
expect "Home Phone"
send "\n"
expect "Other"
send "\n"
expect "information correct"
send "Y\n"
expect eof
EOD
````
**step 4**
change smb password interactive by expect
````
/usr/bin/expect <<EOF
spawn smbpasswd -a $USER
expect "New SMB password"
send "$PASSWD\n"
expect "Retype new SMB password"
send "$PASSWD\n"
expect eof
EOF
````
**step 5**
create share directionary if is not exist
````
if [ ! -d /opt/$NEW_DIR ];then
mkdir /opt/$NEW_DIR
fi
````
**step 6**
delete the share directionary configuration  configed before 
````
    grep "[share]" $CONF_FILE
    if [ $? -eq 0 ];then
    sed -i '/\[share\]/,$d' $CONF_FILE
    fi
````
**step 7**
configure the share directionary in config file
````
cat<<EOF>>$CONF_FILE
[share]
comment = /root
writeable = yes
security = share
path = /opt/$NEW_DIR
browseable = yes
public = yes
EOF
````
**step 8**
restart samba service and judge whether it success or not.
print_info is a export function  defined by yourself.
````
/etc/init.d/smbd restart
if [ $? -ne 0 ];then
print_info 1 smbd_restart
exit 0
else
print_info 0 smbd_restart
fi
````
**step 9**
testing the share directionary can access success or not.
interactive by expect.
````
/usr/bin/expect <<EOF
spawn smbclient //127.0.0.1/$NEW_DIR
expect "password"
send "${PASSWD}\n"
expect "smb: \>"
send "exit\n"
expect eof
EOF
````
**step 10**
delete the test user
````
deluser $USER
````

