 function firstZero(arr, start, end){
    let start = 0;
    let end = arr.length - 1;
    if(end >= start){
        let mid =Math.floor((end + start)/2);
        // the array is [0]
        if(mid === 0 && arr[mid] === 0){
            return mid;
            // [...1,0,...] found the first 0
        }else if(arr[mid - 1] === 1 && arr[mid] === 0){
            return mid;
        }else if(arr[mid] === 1){
            firstZero(arr,start = mid+1,end);
        }else{
            firstZero(arr,start,end = mid - 1)
        }
    }
    return -1;
 }

 function countZeroes(arr){
    let firstZero = firstZero(arr);
    if (firstZero === -1) return 0;
    return arr.length - firstZero;
 }


module.exports = countZeroes