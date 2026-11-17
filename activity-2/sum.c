#include <stdio.h>
#include <time.h>

int main(void) {
    long long total = 0;
    clock_t start = clock();

    for (long long i = 1; i <= 100000000; i++) {
        total += i;
    }

    clock_t end = clock();
    double seconds = (double)(end - start) / CLOCKS_PER_SEC;

    printf("Total: %lld\n", total);
    printf("Time: %.3f seconds\n", seconds);
    return 0;
}