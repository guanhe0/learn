#!/usr/bin/python
import re
import os
import sys
import yaml
import pexpect
import logging
import subprocess
import ConfigParser
from argparse import ArgumentParser

bmc_ip = "192.168.2.100"
bmc_user = "root"
bmc_passwd = "Huwei12#$"

deactivate_sentence = "ipmitool -H %s -I lanplus -U root -P Huwei12#$ sol deactivate"
activate_command = "ipmitool -H %s -I lanplus -U root -P Huwei12#$ sol deactivate"
reboot_command = "ipmitool -H %s -I lanplus -U root -P Huwei12#$ power reset"
poweroff_command = "ipmitool -H %s -I lanplus -U root -P Huwei12#$ power off"
reset_BMC_MAC_command = "ipmitool -H %s -I lanplus -U root -P Huwei12#$ raw %s %s"
nfs_cmds = "linux /Imgae_D05 acpi=force pcie_aspm=off rdinit=/init rdinit=/init crashkernel=256M@32M console=ttyAMA0,115200 earlycon=pl011,mmio,0x602B0000 ip=dhcp"



