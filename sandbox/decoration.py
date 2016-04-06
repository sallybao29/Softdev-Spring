def inc(x):
    return x + 1

def dec(x):
    return x - 1

f = inc
print f(5)

flist = [inc, dec]

print flist[1](5)


#a simple closure in Python:

def makeAdder(n):
    def inner(x):
        return x + n
    return inner

add3 = makeAdder(3)
add5 = makeAdder(5)

print add3(10) #13
print add5(10) #15

#############################################################################

"""A py fxn can be written so as to build and return another fxn"""

#A clunky approach to class type abstraction:

def make_counter():
    #private instance data
    #python scoping rules necessitate list
    count = [0]

    #public methods
    def inc():
        count[0] = count[0] + 1
    def dec():
        count[0] = count[0] - 1
    def reset():
        count[0] = 0
    def get():
        return count[0]

    #return dictionary to allow access to all methods
    return {'inc': inc, 'dec': dec, 'reset': reset, 'get': get}

#Instantiate counters:
c1 = make_counter()
c2 = make_counter()
    
#Must use clunky notation:
c1['inc']()
c1['inc']()
c1['inc']()
print c1['get']()

c2['inc']()
print c2['get']()

c1['reset']()


##############################################################################
"""
import random

def get_name():
    names = ['tom', 'sue', 'harry', 'lisa', 'sarah', 'horatio']
    return random.choice(names)

print get_name()


#Suppose many calls to get_name throughout code
#Suppose want to double name each time used

def dble(f):
    name = f()
    return name+name

#Is this a closure? NO

#We can do better:
#You can redefine a fxn in terms of itself

get_name = dble(get_name)

print get_name
"""
##############################################################################

import random

def doubler(f):
    def inner():
        name = f()
        return name+name
    return inner

@doubler
def get_name():
    names = ['tom', 'sue', 'harry', 'lisa', 'sarah', 'horatio']
    return random.choice(names)

print get_name()

##############################################################################
"""
Takeaway:
You can write fxns that transform fxns.

A Python decorator is shorthand for calling a wrapper-type function like doubler.

A Python decorator encapsulates a closure.

A Python decorator allows you to transparently wrap functionality 
"""
