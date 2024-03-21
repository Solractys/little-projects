#include <stdio.h>

int main () {
  int A = 9;
  int B = 2;
  int C = A + B;

  int x, y, z;
  x = y = z = 100;
  printf("%d\n", x + y + z);
  printf("%d\n\n", C);


  // rectangle area
  int length = 6;
  int width = 10;
  int area; 
   
  area = length * width;

  
  printf("length of rectangle is %d\n", length);
  printf("width of rectangle is %d\n", width);
  printf("area of rectangle is %d\n", area);
}
