// 최솟값의 인덱스를 찾는다.
// 기존 배열에서 해당 인덱스만 제거한다.
function solution(arr) {
  const index = arr.indexOf(Math.min(...arr));
  arr.splice(index, 1);
  return arr.length === 0 ? [-1] : arr;
}
