import time

total = 0
start = time.perf_counter()

for i in range(1, 100_000_001):
    total += i

end = time.perf_counter()

print(f"Total: {total}")
print(f"Time: {end - start:.3f} seconds")