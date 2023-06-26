function solution(players, callings) {
    var hash_t = []


    // 탐색을 위한 해시 테이블 생성
    for(let i=0; i<players.length; i++) {
        hash_t[players[i]] = i;
    }
    
        
    for(let i=0;i<callings.length;i++) {

        // 해시 탐색 ==> key
        var key = hash_t[callings[i]]

        // 스왑
        var tmp = 0;
        tmp = hash_t[players[key]];
        hash_t[players[key]] = hash_t[players[key-1]];
        hash_t[players[key-1]] = tmp;

        var tmp2 = ""
        tmp2 = players[key];
        players[key] = players[key-1];
        players[key-1] = tmp2

    }
    
    
    return players;
    
}