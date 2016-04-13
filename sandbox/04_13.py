'''
2016-04-13
AIM: "Memorization"[:4]+"Memorization"[5:]
DN: Formulate an explanation of the execution time of this algorithm:

#O(n^2)
def fib(n):
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)


DYNAMIC PROGRAMMING (aka "dynamic optimization")
means solving a complex problem by solving their component subproblems just once and storing their solutions
    
MEMOIZATION
technique of storing solutions to subproblems to avoid recomputation

or

Use of caches to retrive previously computed values to reduce time complexity of algorithms

Task: Rewrite fib(n) to employ dynamic programming
'''

###############################################################################

#with an inplace list
def memoize(f):
    memo = {}
    def inner(x):
        if x not in memo:
            memo[x] = f(x)
        return memo[x]
    return inner

@memoize
def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n - 1) + fib(n - 2)

print fib(5)
    
    
    
