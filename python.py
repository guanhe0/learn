#!/usr/bin/python

def judge():
    N=0;
    N=raw_input();
    N=int(N);
    i=0;
    str_list=list();
    while(N):
        N=N-1
        str_tmp=raw_input();
        str_list.append(str_tmp);
        i=i+1;
    print "list len=",str_list.__len__();
    j=0;
    while(j<i):
        print "list[%d]=%s"%(j,str_list[j])
        j=j+1
judge()
