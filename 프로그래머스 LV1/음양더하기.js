function solution(absolutes, signs) {
    //반복문을 통해 signs의 i번째 요소가 false이면 absolutes[i] 에 - 처리한다.
        // 결과를 담을 변수 선언
        let result = 0;
    return absolutes.reduce((acc,val,i) => acc+val*(!signs[i] ? -1 : 1),0)
    }