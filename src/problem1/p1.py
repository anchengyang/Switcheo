def sum_to_n_a(n):
    result = 0
    while n != 0:
        result += n
        n-=1
    return result

def sum_to_n_b(n):
    if n == 0:
        return 0
    else:
        return n + sum_to_n_b(n-1)

def sum_to_n_c(n):
    def helper(n, sum):
        if n == 0:
            return sum
        else:
            return helper(n-1, sum+n)
    return helper(n, 0)

if __name__ == "__main__":
    n = 10
    a = sum_to_n_a(n)
    b = sum_to_n_b(n)
    c = sum_to_n_c(n)
    print(a)
    print(b)
    print(c)