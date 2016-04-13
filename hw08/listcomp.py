#all objects in a, b, or both
def union(a, b):
    return a + [x for x in b if x not in a]

#all objects in both a and b
def intersect(a, b):
    return [x for x in a if x in b]

#all objects in a not in b
def set_diff(a, b):
    return [x for x in a if x not in b]

#all objects in only a or b 
def sym_diff(a, b):
    return set_diff(a, b) + set_diff(b, a)

#all possible ordered pairs (x, y) where x in a and y in b
def cart_prod(a, b):
    return [(x, y) for x in a for y in b]
    

a = [1, 2, 3]
b = [2, 3, 4]

c = [1, 2]
d = ["red", "white"]

print union(a, b)
print intersect(a, b)
print set_diff(a, b)
print sym_diff(a, b)
print cart_prod(c, d)
