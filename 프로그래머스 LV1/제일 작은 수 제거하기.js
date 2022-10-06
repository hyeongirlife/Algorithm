function solution(arr) {
  var answer = [];
  arr.sort((a, b) => b - a);
  answer.push(...arr.slice(0, arr.length - 1));
  if (answer.length === 0) {
    answer = [-1];
  }
  return answer;
}
