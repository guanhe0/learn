#include <stdio.h>

int main()
{
    int ConstN=0;
	while(scanf("%d",&ConstN)&&ConstN!=0)
	{
        int ConstArray[ConstN];
		int i;
		int sum=0;
		int up=6;
		int stop=5;
		int down=4;
		int delta=0;
		int floor=0;

		for(i=0;i<ConstN;i++)
		{
			ConstArray[i]=0;
			scanf("%d",&ConstArray[i]);
		}
		for(i=0;i<ConstN;i++)
		{
			//printf("%d\n",ConstArray[i]);
			if(i==0)
			{
				sum+=ConstArray[i]*up+stop;
			}
			else
			{
				if(ConstArray[i]>ConstArray[i-1])
				{
					delta=up;
					floor=ConstArray[i]-ConstArray[i-1];
				}
				else
				{
					delta=down;
					floor=ConstArray[i-1]-ConstArray[i];
				}
				sum+=delta*floor+stop;
			}
		}
		printf("%d\n",sum);
	}

    return 0;
}
