function sortedFrequency(arr, num) {
    let firstIdx = findFirst(arr, num);
    if (firstIdx == -1) return firstIdx;
    let lastIdx = findLast(arr, num);
    return lastIdx - firstIdx +1
}

function findFirst(arr, num, low=0, high=arr.length-1){
    if (high >= low){
        let middle = Math.floor((high +low)/2)
        if ((middle === 0 || num> arr[middle -1]) && arr[middle] === num){
            return middle;
        }else if (num> arr[middle]){
            return findFirst(arr, num, middle +1, high)
        }else {
            return findFirst(arr, num, low, middle -1)
        }
    }
    return -1
}

function findLast(arr, num, low=0, high=arr.length -1){
    if (high>=low){
        let middle = Math.floor((high +low)/2)
        if ((middle === arr.length-1 || num < arr[middle +1]) && arr[middle] === num) {
            return middle;
        }else if (num < arr[middle]){
            return findLast(arr, num, low, middle-1)
        }else {
            return findLast(arr, num, middle+1, high)
        }
    }
    return -1
}

module.exports = sortedFrequency