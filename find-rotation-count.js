function findRotationCount(arr, start = 0, end = arr.length - 1) {
    if(start > end) return 0;
    if(start === end) return 0;
    if(arr[start] < arr[end] ) return 0;

    let mid = Math.floor((start + end)/2);
    if(mid < end && arr[mid+1] < arr[mid]){
        return mid+1;
    };
    if(mid > low && arr[mid] < arr[mid - 1]){
        return mid;
    }
    if(arr[end] > arr[mid]) {
        return findRotationCount(arr, start = 0, end = mid - 1);
    }else{
        return findRotationCount(arr,start = mid+1, end = arr.length - 1)
    }
}

module.exports = findRotationCount