# lst = [1,2,3,4,5,6,7,8,9]
# res = 0
# for i in lst:
#     res += i


# print(res)

# /////////////////////////////// big element  in arr

# arr = [15,1,2,3,4,5,6,7,8,9,10]

# big = 0

# for i in arr:
#     if i > big:
#         big = i
# print(big)

# ///////////////////////////////swapping first,last in list////////////////

# ------------------------------> (n-1)th
# arr = [12, 35, 9, 56, 24]

# f = arr[0]
# l = arr[len(arr) - 1]
# arr[0] = l
# arr[len(arr) - 1] = f

# print(arr)

# #----------------------------->
# arr = [12, 35, 9, 56, 24]

# [arr[0], arr[-1]] = [arr[-1], arr[0]]

# print(arr)

# #-----------------------------------> in tuple (get will store like tuple --> (12,24))
# arr = [12, 35, 9, 56, 24]

# get = arr[-1], arr[0]

# print("get", get)

# arr[0], arr[-1] = get


# print(arr)

# #-----------------------------------> using * operend
# arr = [12, 35, 9, 56, 24]

# s,*m, l = arr
# lst = [l,*m, s]

# print(lst)

# #-------------------------------->

# arr = [12, 35, 9, 56, 24]
# first = arr.pop(0)
# last = arr.pop(-1)

# arr.insert(0,last)
# arr.append(first)

# print(arr)

# #-----------------------------> slicing

# arr = [12, 35, 9, 56, 24]


# newarr = []
# for i in arr:
#     newarr.extend([i,i])

# print(newarr)


# lst = arr[-1:] + arr[1:-1] + arr[:1]

# print(lst)


# //////////////////////// element repition in list ///////////////////

# --------------------------->
# numbers = [1, 2, 3, 4, 5]

# res = [i for i in range(len(numbers,1)) if(i % 2)==0]
# print(res)


# for loop to break list --> elements repitition

# test_list = [4, 5, 6]

# k = 3
# newarr = []

# for i in test_list:
#     for ele in range(k):
#         newarr.append(i)

# print(newarr)


# finding length of a list in different ways


# lst = [1, 4, 5, 7, 8]

# print(len(lst))

# count = 0
# for i in lst:
#     count += 1

# print(count)

# print(sum (1 for i in lst))


# /////////////////////////////////////////////////////////////

# copying or cloning a list


# ---------> slicing method

# l1 =  [4, 8, 2, 10, 15, 18]

# l2 = l1[:]


# print('l1',l1)
# print('l2',l2)

# #-----------------> extend method

# l3 = [4, 8, 2, 10, 15, 18]

# l4 = [1, 2, 3]

# l4.extend(l3)

# print("l3", l3)
# print("l4", l4)

# #-------------------------> = operator

# l5 =  [4, 8, 2, 10, 15, 18]

# l6 = l5

# l6[0] = 9

# print('l5',l5)
# print('l6',l6)

# #-----------------------> list comprehension

# l7 = [4, 8, 2, 10, 15, 18]
# l8 = [i for i in l1]

# print('l7',l1)
# print('l8',l2)

# #-------------------> append()

# l9 = [4, 8, 2, 10, 15, 18]

# l10 = []

# for itm in l9:
#     l10.append(itm)


# print('l9',l9)
# print('l10',l10)

# #---------------------------> map()


# //////////////////////////////////////////////////////////////////////////////////////
# ////////////////////////////// count occurrence of elements in list //////////////

# arr = [15, 6, 7, 10, 12, 20, 10, 28, 10, 15, 20]

# count = {}


# def occurrence(arr, num):
#     for ele in arr:
#         if ele in count:
#             count[ele] += 1
#         else:
#             count[ele] = 1

#     if num in count:
#         print(num, ":", count[num])
#     else:
#         print("num not found")


# occurrence(arr, 20)

# /////////////////////////////////////////////////////////////// smallest
# arr = [15, 6, 7, 10, 12, 20, 10, 28, 10,15, 20]

# # --------------------> normal method
# sn = arr[0]

# for i in arr:
#     if i < sn:
#         sn = i
# print(sn)

# # ------------------> sorting method
# res = arr.sort()
# print(arr)

# res2 = arr.sort(reverse=True)

# print(arr)

# # ---------------> lambda

# print('lamda',min(arr,key=lambda ele: int(ele)))


# ///////////////////////////////////////////////////////////////////////////////
# /////////////// counting of even and odd

# arr = [10, 21, 4, 45, 66, 93, 1]

# even = 0
# odd = 0

# for i in arr:
#     if i % 2 == 0:
#         even += 1
#     else:
#         odd += 1

# print('even', even)
# print('odd', odd)


# # /// -----> lamda function

# odd_count = len(list(filter(lambda x: x % 2 != 0,arr)))
# even_count = len(list(filter(lambda x: x % 2 == 0 , arr)))

# print(odd_count)
# print(even_count)

# ///////////////////////////////////////////////////////// second largest number

# num= [10, 20, 49, 4, 45, 99,46,47,99,47]

# # -----> sort

# # res = list1.sort()
# # print(list1[len(list1) - 2])
# # print(list1[0])


# # --------> normal

# def add(n):
#  return n * 2 == 40

# res = list(filter(add, num))
# print('filter',res)

# def addd(n):
#   return n * 2

# ress = list(map(addd, num))
# print('map',ress)


# from functools import reduce

# sum = reduce(lambda a,b: a + b, num)

# print('reduce',sum)

# /////////////////////////////////////////////////////

# tuples = [
#     (),
#     ("ram", "15", "8"),
#     (),
#     ("laxman", "sita"),
#     ("krishna", "akbar", "45"),
#     ("", ""),
#     (),
# ]


# res = list(filter(None, tuples))
# print(res)


# ////////////////////////// duplicates from list of integers

# list = [10, 20, 30, 20, 20, 30, 40, 50, -20, 60, 60, -20, -20]

# # ----------------> single loop
# u = []
# d = []

# for i in list:
#     if i not in u:
#         u.append(i)
#     elif i not in d:
#         d.append(i)

# print(d)

# # --------------> brute method

# repeted = []

# for i in range(len(list)):
#     k = i + 1
#     for j in range(k,len(list)):
#         if list[i] == list[j] and list[i] not in repeted:
#             repeted.append(list[i])
# print(repeted)

# # -------------> count()

# lis = [1, 2, 1, 2, 3, 4, 5, 1, 1, 2, 5, 6, 7, 8, 9, 9]

# new = []

# for i in lis:
#     n = list.count(i)

#     if n > 1:
#         if new.count(i) == 0:
#             new.append(i)

# print(new)


# # ----------------> list-dictionary approch

# new_dict = {}
# new_list = []

# for i in lis:
#     if not i in new_dict:
#         new_dict[i] = 1
#     else:
#         new_dict[i] += 1

# for keys, values in new_dict.items():
#     # print(keys,values)
#     if values > 1:
#         new_list.append(keys)

# print(new_list)


# /////////////////////////// remove of empty list from list/////////////////////////
# l = [5, 6, [], 3, [], [], 9]

# #-------------normal
# res = []
# for i in l:
#     # if i == []:
#     #     continue
#     # else:
#     #     res.append(i)

#     if i != []:
#         res.append(i)

# print(res)

# # ------------> list comprehension

# re = [i for i in l if i != []]
# print(re)

# range()


# /////////////////////////////list of strings ////////////


# /////////////////// reversr the list of strings

# l = ["geeks", "for", "geeks", "is", "best"]

# # ----------normal way

# # res = [i[::-1] for i in l]
# # print(res)

# res = []

# for i in l:
#     rv = ''
#     for j in i:
#         rv =  j + rv
#     res.append(rv)

# print(res)

# //////////////////////////////////////////////////---> my own reverse string or list

# arr = [1,2,3,4,5,6,7,8,9,10]

# f = [arr[0]]
# s = []
# for i in range(1,len(arr)):
#     s.append(arr[i * -1])


# res = s + f

# print(res)


# /////////////////////////////////////// factorial of a number //////////////////////////////
# num =3
# fac = 1
# for i in range(1,num+1):
#    fac *= i

# print(fac

# /////////////////////////////////////////

# arr = [1,2,3,4,5]

# print(arr[::-2])

# print(arr[-1:-5:-2])

# arr.reverse()
# print(arr)

# print(list(reversed(arr)))


# f = [arr[0]]
# s = []

# for i in range(1,len(arr)):
#    s.append(arr[i * -1])

# res = s + f
# print(res)


# def print2largest(arr):
#     l, sl = arr[0], float("-inf")
#     for elem in arr:
#         if elem > l:
#             sl, l = l, elem

#         if elem > sl and elem < l:
#             sl = elem

#     return -1 if sl == float("-inf") else sl


# print(print2largest([18, 111, 17, 19, 3, 6, 7, 16, 9, 10, 4, 15, 2, 5]))

# ---------------------------------------------------------------------------#
# ------------------- repetition of elel in list n times --------------------#


# test_list = [4, 5, 6]

# k = 3
# lis = []

# for i in test_list:
#     for j in range(k):
#         lis.append(i)


# print(lis)


# --------------------> occurence of ele in number of times <-----------------#

# arr = [15, 6, 7, 10, 12, 20, 10, 28, 10, 15, 20]

# dic = {}


# def occurence(arr, num):
#     for i in arr:
#         if i in dic:
#             dic[i] += 1
#         else:
#             dic[i] = 1

#     if num in dic:
#         print(num, ":", dic[num])
#     else:
#         print("num is not there")


# occurence(arr, 15)


# ----------------------------> smallest in list

# arr = [5, 15, 6, 7, 10, 12, 20, 10, 4, 28, 10, 15, 20]

# sn = arr[0]

# for s in arr:
#     if s < sn:
#         sn = s

# print(sn)

# >>>>>===========second largested===========>>>>>

# num = [10, 20, 49, 4, 45, 99, 46, 47, 99, 47]

# fl = num[0]
# sl = None

# for i in num:
#     if i > fl:
#         sl = fl
#         fl = i
#     else:
#         sl = i


# print("sl", sl)

# >>>====={duplicates from list of intgers}=========>>>>>

list = [10, 20, 30, 20, 20, 30, 40, 50, -20, 60, 60, -20, -20]
