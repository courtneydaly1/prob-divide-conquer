function countZeroes(arr) {
  let firstZero = findFirst(arr)
  if (firstZero === -1) return 0 ;

  return arr.length - firstZero
}

function findFirst(arr, low=0, high=arr.length -1){
    if (high > low){
        let middle= low + Math.floor((high-low)/2)
        if ((middle === 0 || arr[middle-1]=== 1) && arr[mid]=== 0) {
            return middle
        }else if (arr[mid]=== 1) {
            return findFirst(arr, mid+1, high)
        }
        return findFirst(arr, low, mid -1)
    }
    return -1
}
module.exports = countZeroes