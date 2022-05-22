// 정수를 요소로 갖는 배열을 입력받아 오름차순으로 정렬하여 리턴해야 합니다.

const insertionSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  for (let i = 1; i < arr.length; i++) {
    let tmp = arr[i]
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) {
        arr[j + 1] = arr[j]
      } else {
        break;
      }
    }
    arr[j + 1] = tmp
  }
  return arr
};
