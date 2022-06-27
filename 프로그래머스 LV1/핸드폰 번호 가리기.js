function solution(phone_number) {
  //phone_number의 길이 -4를 해서 * 처리
  let first = ""
  for (let i = 0; i < phone_number.length - 4; i++) {
    first += '*'
  }
  let second = phone_number.slice(phone_number.length - 4)

  return first + second
}