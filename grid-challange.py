def gridChallenge(grid):
    # Write your code here
    res = [sorted(g) for g in grid]
    print('res', res)
    res_t = [list(x) for x in zip(*res)]
    print('res_t', res_t)
    test_res_t = [sorted(t) for t in res_t]
    return 'YES' if res == sorted(res) and res_t == test_res_t else 'NO'



g3 = [
  'plkcarul',
  'yqkpzifl',
  'bdahextl',
  'fjadsmlo',
  'msokhmxd',
  'bisjycrw',
  'emqdadoz',
  'bvozaplr'
]

print(gridChallenge(g3))