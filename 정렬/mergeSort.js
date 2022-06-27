const mergeSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  //병합정렬은 주어진 배열을 좌,우 배열로 나누어 요소가 한개일 때 까지 재귀적으로 나눈다. 그 후 정렬하면서 다시 배열을 합친다.
  //우선 재귀가 종료되는 시점 base case를 만든다.
  if (arr.length < 2) {
    return arr
  }
  //배열을 좌,우로 나눈다.
  let middle = parseInt(arr.length / 2)
  let left = arr.slice(0, middle)
  let right = arr.slice(middle)


  //주어진 배열을 정렬할 함수를 만든다.
  const merge = (left, right) => {
    let resultArr = []
    let leftIndex = 0;
    let rightIndex = 0;
    //삽입정렬에서 했던 것 처럼 좌,우 배열의 요소를 비교하며 빈 배열에 넣어주는 방식을 사용하자
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArr.push(left[leftIndex])
        leftIndex++
      }else{
        resultArr.push(right[rightIndex])
          rightIndex++
        }
      }
    
  return resultArr.concat(left.slice(leftIndex),right.slice(rightIndex))
    } //둘 중 하나의 배열이 정렬이 끝났을 경우 while문을 나온다.
return merge(mergeSort(left),mergeSort(right))
  }
  
