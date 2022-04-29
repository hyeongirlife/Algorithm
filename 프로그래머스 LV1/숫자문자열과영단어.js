function solution(s) {
    //정답은 반환할 변수 선언
    //영단어를 숫자로 변환하기 위해 영단어 배열 선언
    let alphabet = ["zero","one","two","three","four","five","six","seven","eight","nine"]
    let answer=s
    //s의 요소가 숫자면 그대로 추가하고, 알파벳인 경우 숫자를 추가함
    for(let i=0;i<alphabet.length;i++){
    let arr = answer.split(alphabet[i])
    answer = arr.join(i)
    }
        return Number(answer)
    
    }