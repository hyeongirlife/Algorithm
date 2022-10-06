function solution(arr) {
  var answer = [];
  arr.sort((a, b) => b - a);
  answer.push(...arr.slice(0, arr.length - 1));
  return arr.length === 1 ? [-1] : answer;
}
