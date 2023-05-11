
target = [i for i in range(10)]

x = int(input())

input=0

for k in range(x):
    del input
    mul = 1
    chk = [0 for i in range(10)]
    input = int(input())
    while(1):
        count = input * mul
        slist = list(map(int, str(count)))
        for i in slist:
            chk[target.index(i)] = 1

        if chk.count(0) == 0:
            print(f'#{k+1} {count}')
            break

        mul+=1
