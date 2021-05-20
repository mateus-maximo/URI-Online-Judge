#include <stdio.h>

int main(){

    double A, B;

    scanf("%lf", &A);
    scanf("%lf", &B);

    double total = ((A*3.5)+(B*7.5))/11;

    printf("MEDIA = %.5lf\n", total);

    return 0;
}