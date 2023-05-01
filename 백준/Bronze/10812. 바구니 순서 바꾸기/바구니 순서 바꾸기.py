n, m = map(int, input().split())

arr = [i for i in range(1,n+1)]



for testcase in range(m):
    i,j,k = map(int, input().split())
    slice = arr[k-1:j]
    del arr[k-1:j]
    for s in slice:
        arr.insert(i-1,s)
        i+=1
        
        
print(*arr)