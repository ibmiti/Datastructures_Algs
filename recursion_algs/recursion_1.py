# find 5! - this is the notation for 5 factorial
            # similar to 4! || 3! - which are 4 factorial and
             # 3 factorial
# 5! == 5 * 4 * 3 * 2 * 1
# 4! == 4 * 3 * 2 * 1
# ... so on ..

# example of recursive function
# number = 5

user_response = input("which factorial would you like to compute? : ")
user_factorial = int(user_response)
def get_factorial(factorial):
    if factorial < 2:
        return 1
    return factorial * get_factorial(factorial - 1)

# upper bound
if user_factorial < 999:
    print('this is your number you are factorializing : ')
    print(user_factorial)
    print('computing....')
    print('bee-boop bee-boop')
    print(get_factorial(user_factorial))
else :
    print("i don't know if we should even try a num that high buddy")

#
# Recursion Pros & Cons
#
# within a recursive alg, there are no calculations done until the base case is reached
# e.g :
#     if factorial < 2:
#             return 1
#
# So for very large problems ( think : millions of recursive calls ) it is very possible
# to run out of memory since each call takes up O(1) space
#
# 1,000,000! = 1,000,000 * 999,999! ... and so on.
#
# con : does not scale up like iteration, recursive alg require more memory to be spent
#
# con : in many languages the interative approach gets at the solution a bit quicker
#
# con : recursion is not as intuitive to understand
#
# pro : in some cases, recursion can be done with a few lines of code
#
# pro : extremely practical for tree traversals and binary search
