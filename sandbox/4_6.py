#pythagorean triple
#n is the upper bound
def pt(n):
    l = []
    for a in range(1, n):
        for b in range(a+1, n):
            for c in range(b+1, n):
                if a*a + b*b == c*c:
                    l.append([a, b, c])
    return l 
        
print pt(3)
print pt(6)
print pt(7)
print pt(15)


#With listcomps
def pt2(n):
    l = [(a, b, c)
         for a in range(1, n)
         for b in range(a+1, n)
         for c in range(b+1, n)
         if a*a + b*b == c*c]
    return l

print pt2(3)
print pt2(6)
print pt2(7)
print pt2(15)
