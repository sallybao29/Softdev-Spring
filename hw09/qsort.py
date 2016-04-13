import random

def qsort(l):
    if len(l) <= 1:
        return l
    pivot = random.choice(l)
    nl = l[0:pivot] + l[pivot+1:]
    lh = [x for x in nl if x < pivot]
    uh = [x for x in nl if x > pivot]
    
    return qsort(lh) + [x for x in l if x == pivot] + qsort(uh)


l = [10, 5, 9, 10, 4, 256, 2, 2]

print qsort(l)
