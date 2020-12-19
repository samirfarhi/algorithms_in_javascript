function quickSort(array) {
  const swape = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  const partition = (arr, start, end) => {
    let pivot = arr[end];
    let pivotIndex = start;
    for (let i = start; i < end; i++) {
      if (arr[i] < pivot) {
        swape(arr, i, pivotIndex);
        pivotIndex++;
      }
    }
    swape(arr, pivotIndex, end);
    return pivotIndex;
  }

  const sort = (arr, start, end) => {
    if (start >= end) {
      return;
    }
    let index = partition(arr, start, end);
    sort(arr, start, index - 1);
    sort(arr, index + 1, end);
  }

  sort(array, 0, array.length - 1);
  return array;
}

console.log(quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]));