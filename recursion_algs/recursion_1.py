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

if user_factorial:
    print('this is your number you are factorializing ' ' : ')
    print(user_factorial)
    print('computing....')
    print('bee-boop bee-boop')
    print(get_factorial(user_factorial))
