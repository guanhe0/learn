#!/usr/bin/python

def judge():
    N=0;
    N=raw_input();
    N=int(N);
    i=0;
    str_list=list();
    count_array=[0]*N;
    while(N):
        N=N-1
        str_tmp=raw_input();
        str_list.append(str_tmp);
        i=i+1;
    list_len=str_list.__len__();

    for i in range(len(str_list)):
        for j in range(0,i+1):
            if((str_list[i]==str_list[j])):
                count_array[j]=count_array[j]+1;
                break;
    print count_array;
    max=0;
    j=0;
    for id in range(0,list_len):
        if(count_array[id]>max):
            max=count_array[id];
            j=id;
    print "%s"%str_list[j]
judge()
