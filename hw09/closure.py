def wrapper(f):
    def inner(*arg):
        return f(*arg)
    return inner

def make_bold(fn):
    return lambda: "<b>" + fn() + "</b>"

def make_italic(fn):
    return lambda: "<i>" + fn() + "</i>"

@make_bold
@make_italic
def foo():
    return "hello"

hello = foo()

print hello

##################################### HW ######################################
import time

def trace(f):
    def inner(*arg):
        print f.func_name + str(arg) + ": " + str(f(*arg))
    return inner

def timer(f):
    def inner(*arg):
        start = time.time()
        x = f(*arg)
        stop = time.time()
        print "Execution time: " + str(stop - start)
        return x
    return inner

@trace
def fib(n):
    if n == 0:
        return 0
    if n == 1:
        return 1
    return fib(n - 1) + fib(n - 2)


fib_test = fib(5)

fib_test


