function findRotatedIndex(arr, val) {
    let start = 0;
    let end = arr.length -1

    while (start <= end) {
        const middle = Math.floor((start + end)/2);

        if (arr[middle]=== val) return middle;
    }
    //check left half for sorting
    if(arr[start] <= arr[middle]) {
        if (arr[start] <= val && val <= arr[middle]){
            end = middle -1;
        }else {
            start = middle +1;
        }
    }
    //check if right side is sorted
    else {
        if (arr[middle] < val && val <= arr[end]) {
            start = middle +1;
        }else {
            end = middle-1;
        }
    }

  }
  return -1; //if the number is not found


module.exports = findRotatedIndex