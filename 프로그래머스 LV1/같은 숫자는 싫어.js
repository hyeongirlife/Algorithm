function solution(arr)
{
//같은 요소가 존재한다면 뽑는다.
    let result = []
arr.filter((el,idx) => {
if(el !== arr[idx+1]){
    result.push(arr[idx])
}
})
    return result
}