function solution(n) {
  let result = 0;
  for (let i = n; i >= 1; i--) {
    if (n % i === 0) {
      result = result + i;
    }
  }
  return result;
}
