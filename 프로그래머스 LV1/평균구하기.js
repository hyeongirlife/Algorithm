function solution(arr) {
  let result = arr.reduce((a, b) => (a + b)) / arr.length
  return result
}