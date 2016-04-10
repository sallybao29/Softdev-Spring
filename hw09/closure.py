def wrapper(f):
    def inner(*arg):
        return f(*arg)
    return inner


def foo(x, y):
    return x * y

closure = wrapper(foo)
#print closure("hello", 2)

##################################### HW ######################################
import time

def trace(f):
    def inner(*arg):
        return f.func_name + str(arg) + ": " + str(f(*arg))
    return inner

def timer(f):
    def inner(*arg):
        start = time.time()
        f(*arg)
        stop = time.time()
        return "Execution time: " + str(stop - start)
    return inner

def fib(n):
    if n == 0:
        return 0
    if n == 1:
        return 1
    return fib(n - 1) + fib(n - 2)


fib_test1 = trace(fib)
print fib_test1(5)

fib_test2 = timer(fib)
print fib_test2(5)


