function solution(s, skip, index) {
    var answer = '';

    const z = "z".charCodeAt();
    const a = "a".charCodeAt();

    var skip_arr = skip.split("").map((el) => el.charCodeAt());

    s.split("").map((el) => {
        var ascii = el.charCodeAt();
        
        let count = index;
        for(let i=0;i<count;i++) {
            
            ascii++;

            if(ascii > z) {
                ascii = a;
            }

            if(skip_arr.includes(ascii)) {
                count++;
            }
        }

        answer+= String.fromCharCode(ascii);


    })

    return answer;
}