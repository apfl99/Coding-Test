function solution(ingredient) {
    var answer = 0;

    var burger = []

    ingredient.forEach(element => {
        burger.push(element);
        if(JSON.stringify(burger.slice(-4)) === JSON.stringify([1,2,3,1])) {
            answer += 1;
            burger.splice(-4);
        }
    });


    return answer;
}