
arr = [50000,10000,5000,1000,500,100,50,10]


t = int(input())

target_i = 0

input = 0

for i in range(t):
    del input
    input = int(input())
    target_i = 0
    result = [0 for i in range(len(arr))]
    for val in arr:
        if val <= input:
            add = input//val
            result[target_i] += add
            input -= add*val
            if input==0:
                break
            target_i += 1
        else:
            target_i += 1
    print(f'#{i+1}')
    print(*result)

