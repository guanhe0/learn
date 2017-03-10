#!/bin/bash
start=`date +%s`
while(true)
do
	end=`date +%s`
	#echo $end $start
	if [ $end -gt $start ];then
		clear
		echo 'current'
		echo `date -d @$end`
		start=$end
	fi
done
