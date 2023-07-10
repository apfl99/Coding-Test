function solution(wallpaper) {
    var answer = [];
    
    // lux, luy, rdx, rdy
    // lux => 파일 있는 x 중에 가장 작은 값 i
    // luy => 파일 있는 y 중에 가장 작은 값 j
    // rdx => 파일 있는 x 중에 가장 큰 값 i
    // rdy -> 파일 있는 y 중에 가장 큰 값 j

    var x_arr = []
    var y_arr = []

    for(let i=0; i<wallpaper.length; i++) {
        var p_arr = wallpaper[i].split("")
        for(let j=0; j<p_arr.length; j++) { 
            if(p_arr[j] == "#") {
                x_arr.push(i);
                y_arr.push(j);
            }
        }
    }


    answer.push(Math.min(...x_arr)); // ldx
    answer.push(Math.min(...y_arr)); // ldy
    answer.push(Math.max(...x_arr)+1); // rdx
    answer.push(Math.max(...y_arr)+1); // rdy


    return answer;
}