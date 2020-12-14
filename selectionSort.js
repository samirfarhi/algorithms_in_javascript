function selectionSort(array) {
  let min;
  for (let i = 0; i < array.length; i++) {
    min = array[i];
    for(let j = i + 1; j < array.length; j++){
      if (min > array[j]) {
        let c = min;
        min = array[j];
        array[j] = c;
      }
    }
    if (min !== array[i]) {
      array[i] = min;
    }
  }
  return array;
}