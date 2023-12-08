function findFloor(arr, val, low= 0, high = arr.length -1) {
  if (low > high) return -1;
  if (val >= arr[high]) return arr[high];

  let middle = Math.floor((low + high)/2)

  if (arr[middle] === val) return arr[middle];

  if (middle >0 && arr[middle-1] <= val && val < arr[middle]){
    return arr[middle -1];
  }
   if (val < arr[middle]){
    return findFloor(arr,val,low, middle-1)
   }
   return findFloor(arr,val,middle +1, high)
}

module.exports = findFloor