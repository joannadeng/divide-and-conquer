function sortedFrequency() {
    let first = findFirst(arr, num);
    if (first === -1) {
        return -1
    }
    let last = findLast(arr.num);
    return last - first + 1;
}

function findFirst(arr, num, start = 0 ,end = arr.length - 1){
    while(start <= end){
        let mid = Math.floor((start + end) / 2);
        // arr = [num]
        if(mid === 0 && arr[mid] === num){
            return mid;
            // mid is the first 
        }else if (num > arr[mid - 1] && arr[mid] === num) {
            return mid;
        }else if (num > arr[mid]){
            findFirst(arr, num, start = mid + 1,end = arr.length - 1);
        }else {
            findFirst(arr, num, start = 0, end = mid - 1)
        }
    }
    return -1;
}

function findLast(arr, num, start = 0, end = arr.length - 1) {
    while(start <= end) {
        let mid = Math.floor((start + end)/2);
        //arr = [num]
        if(mid === 0 && arr[mid] === num) {
            return mid;
            // mid is the last 
        }else if(num < arr[mid + 1] && arr[mid] === num){
            return mid;
        }else if(num > arr[mid] ){
            findLast(arr. num, start = mid +1, end = arr.length - 1)
        }else{
            findLast(arr, num, start = 0, end = mid - 1);
        }
    }
}

module.exports = sortedFrequency