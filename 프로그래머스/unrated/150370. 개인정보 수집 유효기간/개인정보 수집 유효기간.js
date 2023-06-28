function solution(today, terms, privacies) {
    var answer = [];

    const [t_year, t_month, t_day] = today.split(".").map((el)=>+el);

    const term_info = [];

    for(let i=0;i<terms.length;i++) {
        const [term, month] = terms[i].split(" ");
        term_info[term] = Number(month);
    }

    // 만료날 계산
    const privacies_e = [];



    // 월 우선 계산 후 저장
    privacies.map((el)=> {
        const [pr_day, pr_term] = el.split(" ")
        const pr_day_arr = pr_day.split(".").map((el)=>+el);
        
        pr_day_arr[1] += term_info[pr_term];
        privacies_e.push(pr_day_arr);
    })

    

    // 월 초과 계산
    privacies_e.map((el) => {
        // 12의 배수
        if(el[1]%12 == 0) {
            const y = Math.floor(el[1]/12) - 1;
            el[1] = 12
            el[0] += y
        }

        // 아닐 때
        else {
            const y = Math.floor(el[1]/12);
            el[0] += y;
            el[1] %= 12;
        }

    })



    // 파기 여부
    privacies_e.forEach((el,idx) => {
        if(t_year > el[0]) {
            answer.push(idx+1);
        } else if (t_year == el[0]) {
            if(t_month > el[1]) {
                answer.push(idx+1);
            } else if (t_month == el[1]) {
                if(t_day > el[2]) {
                    answer.push(idx+1);
                } else if (t_day == el[2]) {
                    answer.push(idx+1);
                }
            }
        }
    })

    return answer;

}