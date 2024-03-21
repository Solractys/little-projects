#include <stdio.h>

int main() {
  int items = 90;
  float valueItem = 5.25;
  float valueTotal = items * valueItem;
  char currency = '$';

  printf("O valor do item é: %.2f%c\n", valueItem, currency);
  printf("A quantidade de items é: %d\n", items);
  printf("valor Total:\t%.2f%c\n\n", valueTotal, currency);

  return 0;

}
