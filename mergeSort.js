function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let medium = Math.floor(array.length / 2);
  let arr1 = mergeSort(array.slice(0, medium));
  let arr2 = mergeSort(array.slice(medium, array.length));
  return merge(arr1, arr2);
}

function merge(arr1, arr2) {
  let arr = [];
  while(arr1[0] && arr2[0]){
    if (arr1[0] < arr2[0]){
      arr.push(arr1[0]);
      arr1 = arr1.filter(e => e !== arr1[0]);
    } else {
      arr.push(arr2[0]);
      arr2 = arr2.filter(e => e !== arr2[0]);
    }
  }

  while(arr1[0]) {
    arr.push(arr1[0]);
    arr1 = arr1.filter(e => e !== arr1[0]);
  }

  while(arr2[0]) {
    arr.push(arr2[0]);
    arr2 = arr2.filter(e => e !== arr2[0]);
  }

  return arr;
}

console.log(mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));