function solution(n) {
    let answer = 0;
    let arr = []
    for(let i=2; i<=n; i++){
        arr[i] = i
    }
    //2부터 시작해서 특정 숫자의 배수에 해당하는 숫자들은 모두 지운다.
    for(let j=2; j<=n; j++){
    //이미 0 처리된 값은 패스한다.
        if(arr[j] === 0){
            continue;
        }
        for(let k=j*2; k<=n; k+=j){
            arr[k] = 0
        }
    }
    for(let l=2; l<=n; l++){
        if(arr[l] !== 0){
            answer ++
        }
    }
        return answer
    }