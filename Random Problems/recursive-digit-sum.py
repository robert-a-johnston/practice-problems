
def superDigit(n, k):
    return 1 + (k * sum(int(x) for x in n) - 1) % 9

print(superDigit('123', 25))