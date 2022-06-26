function solution(a, b) {
  //a배열,b배열의 같은 요소끼리의 값을 더해나간다.
  //우선 결과 변수 선언
  let result = 0;
  //반복문을 통해 계속 곱해줌
  for(let i=0; i<a.length; i++){
      result += a[i]*b[i]
  }
  return result
}