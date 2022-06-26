process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const n = data.split(" ");
  const a = Number(n[0]), b = Number(n[1]);
  //이중 배열로 b열 만큼 생성해서 a행만큼 추가한다.
  for (let i = 0; i < b; i++) {
    let result = ""
    for (let k = 0; k < a; k++) {
      result += '*'
    }
    console.log(result)
  }
});