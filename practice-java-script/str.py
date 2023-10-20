# def length(s):
#     print(len(s))
#     for i in s:
#         print(i)
#     for i in range(len(s)):
#         print('hi', s[i])

# length('rujith')


# print(range(5))

# //////////////////////////////////////

# def char_frequency(str1):
#     dict = {}
#     for n in str1:
#         keys = dict.keys()
#         print(keys)
#         # if n in keys:
#         #     dict[n] += 1
#         # else:
#         #     dict[n] = 1
#     return dict
# print(char_frequency('google.com'))


# def c_f(s):
#     d = {}

#     for i in s:
#         keys = d.keys()
#         if i in keys:
#             d[i] += 1
#         else:
#             d[i] = 1

#     return d

# print(c_f('rujithramu'))


# ///////////////////////////////

# def FLtwoC(s):
#     if(len(s) < 2):
#         return ''
#     else :
#         return s[0:2] + s[-2:]

# print(FLtwoC('rujithramu'))
# ///////////////////////////////////////////////

# def swapFL(s1,s2):
#     return s2[0:2] + s1[-1:],s1[0:2] + s2[-1:]
# print(swapFL('abc','xyz'))


# ////////////////////////////////

# def ing(s):
#     if(s[-3:] == 'ing'): return s + 'ly'
#     else: return s + 'ing' 

# print(ing('rujithing'))

# ////////////////////////////// list of words ---> word --> longest,length


# lst = ['apple','orange','mango','watermelon','muskmelon','promogranate']

# Lw = ''
# lOLW = 0

# for i in lst:
#     if len(i) > len(Lw):
#         Lw = i
#     else:
#         Lw = Lw

#     if len(i) > lOLW:
#         lOLW = len(i)

# print(Lw,lOLW)


# ///////////////////////////////////////////// remove at nth 


# stt = 'rujithramu'
# print(len(stt))
# print(stt[:len(stt)-1])


# def nth(s,n):
#     fh = s[0 : n]
#     sh = s[n+1 : ]
#     print(fh + sh)

# nth('rujithramu',3)


# ///////////////////////////////// new string from existed string where f and  l exchanged

# def FL(s):
#     f = s[0]
#     l = s[len(s)-1]
#     m = s[1:len(s)-1]
#     print(l)
#     print(l + m + f)


        

# print(FL('abcdefghi'))

# ///////////////////////////////// remoe odd indexed from string

# def odd(s):
#     res = ''
#     for i in range(len(s)):
#         if i % 2 == 0:
#             res += s[i]

#     print(res)

# odd('rujiht')


# ////////////////////////////////// number of occurence of word in a string

# def stringOcc(s):
#     count = dict()
#     Words = s.split()
#     for word in Words:
#         if word in count:
#             count[word] += 1

#         else :
#             count[word] = 1

#     print(count)
# stringOcc('hi rujith how are you man and hi for your bother man whats the matter man and i forgot to tell hi for our friends')


# //////////////////////////
# dic = {}

# dic['count1'] = 1
# dic['count2'] = 2 

# print(dic)


# /////////////////////////////

# inputt = input('')

# def L_U(s):
#     res = ''
#     for i in range(len(s)):
#         if i % 2 == 0:
#             res += s[i].upper()
#         else:
#             res += s[i].lower()
#     print(res)

# L_U(inputt)
# ///////////////////////////////// last two char 4 times

# def Last(s):
#     res = ''
#     lt = s[-2:]
#     res += lt *4 
#     print(res)

# Last('upesh')

# //////////////////////////// programe upto two decimal places


# def funct():
#     count = 0

#     while count < 10-1:
#         count += 1

#     print(count)

# funct()

# ////////////////////////////////////// zeros left to a num for specified width

# def ZL(n1,n2):
#     zeros = ''
#     for i in range(n2):
        


# ZL(24,3)


# /////////////////////////////////////////////////


s = 'Rujith'


# res = s[::-1]
# print(res)

# res = ''

# for i in s:
#     res = i + res

# print(res)



# def recursive(s):
#     if len(s) == 0:
#         return s
#     else:
#         return recursive(s[1:]) + s[0]
    
# print(recursive(s))

# ////////////////////////////////////////////

s = 'rujith ramu how are you man'


# res = ''

# for i in s:
#     res = i + res

# print(res)


# sw = s.split(' ')

# rr = ''

# for i in sw:
#     res = ''
#     for j in i:
#         res = j + res
    
#     rr += res + " "
# print(rr)
# // --------------> to reversr string and each word in string
# f = s[0]
# print(f)
# st = ''

# for i in range(1,len(s)):
#     st += s[i * -1]

# res = st + f

# print(res)

# /////////////? reversr a string 

s = 'rujith'

rv = ''
for i in s:
    rv = i + rv

print(rv)