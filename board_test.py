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
