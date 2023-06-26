function solution(name, yearning, photo) {
    var answer = [];

    var h_table = [];

    for(let i=0; i<name.length; i++) {
        h_table[name[i]] = yearning[i];
    }

    for(let i=0;i<photo.length;i++) {
        var result = 0;
        for(let j=0; j<photo[i].length;j++) {
            if(h_table[photo[i][j]] != undefined) {
                result += h_table[photo[i][j]];
            }
        }
        answer.push(result)
    }

    return answer;
}