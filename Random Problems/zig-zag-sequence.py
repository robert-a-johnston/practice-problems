# debugging question in python
# array 1 2 3 4 5 -> 1 2 5 4 3
# can only change 3 lines

# original
#---------
# def findZigZagSequence(a, n):
#     a.sort()
#     mid = int((n + 1)/2)
#     a[mid], a[n-1] = a[n-1], a[mid]

#     st = mid + 1
#     ed = n - 1
#     while(st <= ed):
#         a[st], a[ed] = a[ed], a[st]
#         st = st + 1
#         ed = ed + 1

#     for i in range (n):
#         if i == n-1:
#             print(a[i])
#         else:
#             print(a[i], end = ' ')
#     return

def findZigZagSequence(a, n):
    a.sort()
    mid = (int((n + 1)/2)- 1)
    print(mid)
    a[mid], a[n-1] = a[n-1], a[mid]

    st = mid + 1
    ed = n - 2
    while(st <= ed):
        a[st], a[ed] = a[ed], a[st]
        st = st + 1
        ed = ed - 1

    for i in range (n):
        if i == n-1:
            print(a[i])
        else:
            print(a[i], end = ' ')
    return

arr = [1, 2, 3, 4, 5, 6, 7]
findZigZagSequence(arr, 7)

