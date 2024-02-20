function findFloor(arr, num, start = 0, end = arr.length - 1) {
    //empty arry
    if(start > end) return -1;
    if(num >= arr[end]) return arr[end];

    let mid = Math.floor((start + end)/2);
    if(mid > start && num < arr[mid] && num >= arr[mid - 1]) return arr[mid - 1];
    if(num < arr[mid]){
        return findFloor(arr,num, start = 0, end = mid - 1);
    }
    return findFloor(arr, num , mid+1, end = arr.length - 1);
}

module.exports = findFloor