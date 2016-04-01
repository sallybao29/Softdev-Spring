################################# TESTING ###################################

def inc(x):
    return x + 1

f = inc


def h(x):
    return lambda y: x + y

print h(1)
print h(2)
print h(1)(3)
print h(2)(5)


b = h(1)

print b


def f(x):
    def g(y):
        return x + y
    return g

print f(1)
print f(2)
print f(1)(3)
print f(2)(5)


#################################### HW ###################################
def repeat(phrase):
    return lambda y: phrase * y

r1 = repeat('hello')
r2 = repeat('goodbye')

print repeat('cool')(3)
print r1(2)
print r2(2)

print repeat(h(r1(2))(r2(2)))(3);
