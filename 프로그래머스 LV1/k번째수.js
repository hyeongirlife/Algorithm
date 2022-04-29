function solution(array, commands) {
    //반복문을 통해 commands[i][0] 부터 commands[i][1] 까지 원소를 slice로 복제한다.
    // 복제한 원소를 sort로 정렬한다.
    // 정렬한 원소 중 command[i][2]번째 요소를 뽑아 결과배열에 푸쉬한다.
    let result = [];
        // selectArr.sort()
    for(let i=0;i<commands.length;i++){
        let selectArr = array.slice(commands[i][0]-1,commands[i][1]).sort((a,b) => {return a-b})
        result.push(selectArr[commands[i][2]-1])
    }
        return result
    }