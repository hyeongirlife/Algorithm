function solution(phone_number) {
  //phone_number의 길이 -4를 해서 * 처리
  let first = ""
  for (let i = 0; i < phone_number.length - 4; i++) {
    first += '*'
  }
  let second = phone_number.slice(phone_number.length - 4)

  return first + second
}

// repeat 함수 이용한 결과
function hide_numbers(s) {
  var result = "*".repeat(s.length - 4) + s.slice(-4);
  //함수를 완성해주세요

  return result;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + hide_numbers('01033334444'));