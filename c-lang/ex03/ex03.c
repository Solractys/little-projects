#include <stdio.h>

int main() {
  char L1 = 67, L2 = 97, L3 = 114, L4 = 108, L5 = 111, L6 = 115;
  char name[] = {L1, L2, L3, L4, L5, L6};
  int idade;
  double valor;
  printf("%lu\n", sizeof(name));
  printf("%lu\n", sizeof(L1));
  printf("%lu\n", sizeof(idade));
  printf("%lu", sizeof(valor));
  return 0;
}
