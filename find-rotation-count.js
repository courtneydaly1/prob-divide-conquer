function findRotationCount(arr, low =0, high=arr.length -1) {
    if (high < low) return 0;
    if (high === low) return low;
    let middle = Math.floor((high + low)/2);
    
    //chekc if (middle +1) is the minimum num
    if (middle < high && arr[middle] < arr[middle]) {
        return middle +1;
    }
    
    //is miiddle the min
    if (middle > low && arr[middle] < arr[middle -1]){
        return middle;
    }
   // decide left or right
  if (arr[high] >arr[middle]){
    return findRotationCount(arr, low, middle-1)
  }
  return findRotationCount(arr, mid +1, high)
}

module.exports = findRotationCount