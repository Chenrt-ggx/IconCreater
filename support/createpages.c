#include <stdio.h>

int main()
{
	char name[55],s[555];
	for (int i=2;i<=40;i++)
	{
		freopen("showimage01.html","r",stdin);
		sprintf(name,"showimage%02d.html",i);
		freopen(name,"w",stdout);
		for (int j=0;j<31;j++) gets(s),puts(s);
		for (int j=0;j<12;j++) gets(s);
		for (int k=0;k<4;k++) putchar('\t');
		printf("<a href=\"images\\examples_images\\%d.jpg\" download=\"\">\n",i);
		for (int k=0;k<5;k++) putchar('\t');
		printf("<img src=\"images\\examples_images\\%d.jpg\" alt=\"\"/></a>\n",i);
		for (int k=0;k<4;k++) putchar('\t');
		printf("<a href=\"images\\examples_version1\\%d.jpg\" download=\"\">\n",i);
		for (int k=0;k<5;k++) putchar('\t');
		printf("<img src=\"images\\examples_version1\\%d.jpg\" alt=\"\"/></a>\n",i);
		for (int k=0;k<4;k++) putchar('\t');
		printf("<a href=\"images\\examples_version2\\%d.jpg\" download=\"\">\n",i);
		for (int k=0;k<5;k++) putchar('\t');
		printf("<img src=\"images\\examples_version2\\%d.jpg\" alt=\"\"/></a>\n",i);
		for (int k=0;k<4;k++) putchar('\t');
		printf("<a href=\"images\\examples_version3\\%d.jpg\" download=\"\">\n",i);
		for (int k=0;k<5;k++) putchar('\t');
		printf("<img src=\"images\\examples_version3\\%d.jpg\" alt=\"\"/></a>\n",i);
		for (int k=0;k<4;k++) putchar('\t');
		printf("<a href=\"images\\examples_version4\\%d.jpg\" download=\"\">\n",i);
		for (int k=0;k<5;k++) putchar('\t');
		printf("<img src=\"images\\examples_version4\\%d.jpg\" alt=\"\"/></a>\n",i);
		for (int k=0;k<4;k++) putchar('\t');
		printf("<a href=\"images\\examples_version5\\%d.jpg\" download=\"\">\n",i);
		for (int k=0;k<5;k++) putchar('\t');
		printf("<img src=\"images\\examples_version5\\%d.jpg\" alt=\"\"/></a>\n",i);
		for (int j=0;j<15;j++) gets(s),puts(s);
		gets(s),printf("%s",s);
	}
	return 0;
}