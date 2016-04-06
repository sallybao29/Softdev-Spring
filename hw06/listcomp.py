"""
Checks if password is a valid combination of characters

Params: a string password
Returns: a boolean 

Conditions: Password must contain a mix of lowercase letters, uppercase letters,
and at least one number

"""

def is_valid_pass(password): 
    lower = sum([1 for x in password if x >= 'a' and x <= 'z'])
    upper = sum([1 for x in password if x >= 'A' and x <= 'Z'])
    num = sum([1 for x in password if x.isdigit()])
    return lower > 0 and upper > 0 and num > 0


"""
Determines the strength of a password 

Params: a string password
Returns: an integer between 1 and 10 where 10 is the strongest

Conditions: There is a strength increase of 2.5 if there exists at least one occurence of any of the following:
lowercase letter
uppercase letter
number
non-alphanumeric

"""
def strength(password):
    NON_ALPHA = ".,?!@#$%^&*():;-_+="
    l = len(password)
    lower = [1 for x in password if x >= 'a' and x <= 'z']
    upper = [1 for x in password if x >= 'A' and x <= 'Z']
    num =  [1 for x in password if x.isdigit()]
    sp =  [1 for x in password if x in NON_ALPHA]

    master = [lower, upper, num, sp]
    strength = [-1 for x in master if len(x) == 0]

    return int(10 + sum(strength) * 2.5)
    
    

if __name__ == "__main__":
    
    print is_valid_pass("PPSodod1010")
    print is_valid_pass("123")
    print is_valid_pass("dF")

    print strength("PPSjsf@ii77")
    print strength("123")
    print strength("dF1223414ddd")
    print strength("dddddddddddddd")
    print strength("ddddddddddd3333d")
    print strength("")
