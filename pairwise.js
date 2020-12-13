function pairwise(arr, arg) {
  if (arr.lenght === 0) return 0

  if (arr.lenght === 1 && arr[0] + arr[1] === arg) {
    return 1;
  }
  let arrOfSums = [];
  let sum = 0;
  for (let i = 0; i < arr.length ; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === arg) {
        if ( j in arrOfSums || i in arrOfSums) {
          break
        } else {
          arrOfSums.push(i);
          arrOfSums.push(j);
          break;
        }
      }
    }
  }
  arrOfSums.forEach(item => sum += item);
  return sum;
}

console.log(pairwise([0, 0, 0, 0, 1, 1], 1));
