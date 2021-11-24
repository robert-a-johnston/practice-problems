- recursively sort 1st half of input array
- "" 2nd ""
- merge two sorted sub arrays

C = output [length = n]
A = 1st sorted array [n/2]
B = 2nd sorted array [n/2]
i = 1
j = 1

for k = 1 to n
  if A(i) < B(j)
    C(k) = A(i)
    i++
  else [B(j) < A(i)]
    C(k) = B(j)
    j++