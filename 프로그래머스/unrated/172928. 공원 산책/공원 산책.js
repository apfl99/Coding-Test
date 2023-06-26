function solution(park, routes) {
    var current_point = [];

    var park_map = [];
    for(let i=0;i<park.length;i++) {
        var tmp = park[i].split("")
        tmp.filter((el,index) => {
            if(el == 'S') {
                current_point.push(i)
                current_point.push(index)
            }
        })
        park_map.push(tmp)
    }
    
    console.log(park_map)

    

    for(let i=0;i<routes.length;i++) {
        var val = routes[i].split(" ")
        console.log(current_point)
        console.log("->")
        if(val[0] == "W") {// y좌표 -
                console.log("W : ",val)
                // 공원을 벗어나는지
                if(current_point[1]-Number(val[1]) >= 0) {
                    // 장애물이 있는지
                    var check = 0;
                    for(let i=current_point[1]-1; i>=current_point[1]-Number(val[1]); i--) {
                        if(park_map[current_point[0]][i] == "X") {
                            check++;
                            break;
                        }
                    }
                    if(check == 0) current_point[1] -= Number(val[1]);
                    console.log(current_point)
                }
        }
        else if(val[0] == "S") { // x좌표 +
                console.log("S : ",val)
                // 공원을 벗어나는지
                if(current_point[0]+Number(val[1]) < park_map.length) {
                    // 장애물이 있는지
                    var check = 0;
                    for(let i=current_point[0]+1; i<=current_point[0]+Number(val[1]); i++) {
                        if(park_map[i][current_point[1]] == "X") {
                            check++;
                            break;
                        }
                    }
                    if(check == 0) current_point[0] += Number(val[1]);
                }
        }
        else if(val[0] == "E") { // y좌표 +
            console.log("E : ",val)
            // 공원을 벗어나는지
            if(current_point[1]+Number(val[1]) < park_map[0].length) {
                // 장애물이 있는지
                var check = 0;
                for(let i=current_point[1]+1; i<=current_point[1]+Number(val[1]); i++) {
                    if(park_map[current_point[0]][i] == "X") {
                        check++;
                        break;
                    }
                }
                if(check == 0) current_point[1] += Number(val[1]);
            }
        }
        else if(val[0] == "N") { // x좌표 -
            console.log("N : ",val)
                // 공원을 벗어나는지
                if(current_point[0]-Number(val[1]) >= 0) {
                    // 장애물이 있는지
                    var check = 0;
                    for(let i=current_point[0]-1; i>=current_point[0]-Number(val[1]); i--) {
                        if(park_map[i][current_point[1]] == "X") {
                            check++;
                            break;
                        }
                    }
                    if(check == 0) current_point[0] -= Number(val[1]);
                }
        }

        console.log(current_point)
        console.log("------------------")

    }

    return current_point;

}