function solution(arr1, arr2) {
  const result = [];
  arr1.forEach((el, index) => {
    result.push(el.map((value, idx) => value + arr2[index][idx]));
  });
  return result;
}
