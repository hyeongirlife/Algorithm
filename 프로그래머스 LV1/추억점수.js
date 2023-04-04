function solution(name, yearning, photo) {
  const key = [...name];
  const value = [...yearning];
  const photos = [...photo];

  const Obj = key.reduce((acc, cur, idx) => {
    acc[cur] = value[idx];
    return acc;
  }, new Object());

  const result = photos.map((photo) => {
    let count = 0;
    photo.map((value) => {
      if (Obj[value] !== undefined) {
        count += Obj[value];
        return count;
      }
      return;
    });
    return count;
  });

  return result;
}

function solution(name, yearning, photo) {
  const result = [];

  const obj = {};
  name.forEach((el, index) => {
    obj[el] = yearning[index];
  });
  photo.forEach((arr) => {
    let sum = 0;
    for (let el of arr) {
      sum += el in obj ? obj[el] : 0;
    }
    result.push(sum);
  });
  return result;
}
