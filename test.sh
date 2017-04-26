#!/bin/bash
str1='abcd'
str2='a'
str3='A'

if [[ $str1 =~ $str2 ]] ||  [[$str1 =~ $str3 ]]; then
	echo 'contain'
else
	echo 'not contain'
fi

