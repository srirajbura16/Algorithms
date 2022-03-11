function selection_sort(arr) {
  let start_point = 0;
  let sorted = false;

  let lowest_value_index = 0;
  while (!sorted) {
    if (start_point === arr.length - 1) {
      // The values are already sorted when we reach the end of the array.
      sorted = true;
      break;
    }
    for (let i = start_point + 1; i <= arr.length - 1; i++) {
      if (arr[i] < arr[lowest_value_index]) {
        lowest_value_index = i;
      }
    }

    //swap lowest value with the starting point, not if lowest value is starting point
    if (lowest_value_index != start_point) {
      [arr[start_point], arr[lowest_value_index]] = [
        arr[lowest_value_index],
        arr[start_point],
      ];
    }

    start_point++;
    lowest_value_index = start_point;
  }
  return arr;
}

console.log(selection_sort([7, 6, 5, 4, 3, 2, 1]));
console.log(selection_sort([32, 54, 23, 13, 11]));
console.log(selection_sort([3, 2, 5, 1, 6, 9]));
