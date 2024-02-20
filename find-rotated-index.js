function findRotatedIndex(arr, num) {
    let pivot = findPivot(arr);
    if(pivot > 0 && num > arr[0] && num < arr[pivot - 1]){
        binarySearch(arr,num,0,pivot - 1)
    }else{
        binarySearch(arr,num,pivot,arr.length-1);
    }
}

module.exports = findRotatedIndex

function findPivot(arr,start = 0, end = arr.length - 1){
    if(arr[0] === 1 || arr[0] < arr[arr.length - 1]) return 0;
    let start = 0; 
    let end = arr.length - 1;
    while (start < end){
        let mid = Math.floor((start + end)/2);
        if(arr[mid] > arr[mid + 1]) return mid + 1;
        else if(arr[0] < arr[mid]){
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }
}

function binarySearch(arr, num, start = 0, end = arr.length - 1){
    // empty array
    if(arr.length === 0) return -1;
    if(num < arr[start] || num > arr[end]){
        return -1;
    }

    while(start <= end) {
        let mid = Math.floor((start + end)/2);
        if(num === arr[mid]) return mid;
        else if(num > arr[mid]){
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }
    return -1;
}