# recursion vs iteration :

def get_recursive_factorial(n):
	if n < 0:
		return -1
	elif n < 2:
		return 1
	else:
		return n * get_recursive_factorial(n - 1)

#  here is the iterative solution / alg

def get_iterative_factorial(n):
	if n < 0:
		return -1
	elif n < 2:
		return 1
	fact = 1
	# we must declare n + 1 within range to include the last el when writing loops with py
	for i in range(1, n+1):
		fact *= i
	return fact

print(get_recursive_factorial(6))
print(get_iterative_factorial(6))
