def validate_pass(password): 
    lower = [1 if x >= 'a' and x <= 'z' else 0 for x in password]

    return lower


print validate_pass("PPSodod1010")
