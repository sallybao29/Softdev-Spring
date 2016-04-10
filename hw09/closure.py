
def wrapper(f):
    def inner(*arg):
        return f(*arg)
    return inner


def foo(x, y):
    return x * y

closure = wrapper(foo)
print closure("hello", 2)

##################################### HW ######################################

def trace(f):
    def inner(*arg):
        return f.func_name + str(arg) + ": " + f()
    return inner

@trace
def hello():
    return "hello world"

a = hello()
print a

def 
