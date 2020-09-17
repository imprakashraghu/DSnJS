// Find the sum of two numbers that match the target given
// array can have negative integers
// array could be empty
// array could sorted/unsorted
/*
    Input:
    ------
    arr = [1,2,3,4,5,6] , target = 8

    Output:
    -------
    [1,7] 

    worstcase not present => null

*/

// consider array is sorted
function _twoSum(arr, target) { // O(n^2)
    if(arr.length === 0) return null; // edge cases
    for(var i=0; i<arr.length; i++) {
        for(var j=i+1; j<arr.length; i++) {
            let sum = arr[i] + arr[j];
            if(sum === target) {
                return [i,j];
            }
        }
    }
    return null;
}
function __twoSum(arr, target) { // O(n)
    if(arr.length === 0) return null; // edge cases
    var a_pointer = 0;
    var b_pointer = arr.length - 1;
    while(a_pointer < b_pointer) {
        let sum = arr[a_pointer] + arr[b_pointer];
        if(sum === target) {
            return [a_pointer, b_pointer];
        } else if(sum > target) {
            b_pointer--;            
        } else {
            a_pointer++;
        }
    }
    return null;
}

// consider array is unsorted
function twoSum(arr, target) { // O(n) 
    if(arr.length === 0) return null; // edge cases
    var hashMap = {};
    for(var i=0; i<arr.length; i++) {
        let complement = target - arr[i];
        if(hashMap[complement]) {            
            return [hashMap[complement], i]
        } 
        hashMap[arr[i]] = i;
    }
    return null;
}

