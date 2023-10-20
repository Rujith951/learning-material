# lst = [1, 11, 5, 19, 0]


# fs = float("inf")
# ss = float("inf")


# for num in lst:
#     if num < fs:
#         fs = num

# for num in lst:
#     if num == fs:
#         continue
#     else:
#         if num < ss:
#             ss = num


# print(ss)


# fh = float("-inf")
# sh = float("-inf")

# for num in lst:
#     if num > fh:
#         fh = num

# for num in lst:
#     if num == fh:
#         continue
#     else:
#         if num > sh:
#             sh = num


# print(fh)
# print(sh)


"""
instance(obj, classname)
iterable class --> from collections.abc import Iterable

//

infinity in python ---> float('inf')


"""


# [    1, 2, 3, 4, 5, 6, 7, 8    ].  k = 2
# [     3, 4, 5, 6, 7, 8, 1, 2.  ]


lst = [1, 2, 3, 4, 5, 6, 7, 8]

k = 0

for i in range(len(lst) - k):
    p = lst.pop()
    lst.insert(0, p)

print(lst)
