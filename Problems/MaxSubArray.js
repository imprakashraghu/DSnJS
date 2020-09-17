// Find the maximum sum from the consecutive sub array of length given
// return null if array is empty

/*
    Input:
    ------
    arr = [3,2,5,6,7,12,5,6,7] num = 4

    Output:
    -------
    30 => [5,6,7,12]

*/

// NAIVE SOLUTION
function _maxSubArraySum(arr, num) { // O(n^2)
    if (num > arr.length) {
        return null;
    }
    var max = -Infinity;
    for (let i =0; i< arr.length - num + 1; i++) {
        temp = 0;
        for (let j =0; j< num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

// SLIDING WINDOW APPROACH
function maxSubArraySum(arr, num) { // O(n)
    var maxSum = 0;
    var wSum = 0;
    if(arr.length < num) return null;
    for(var i=0; i<num; i++) {
        maxSum += arr[i];
    }
    wSum = maxSum;
    for(var i=num; i<arr.length; i++) {
        wSum = wSum - arr[i - num] + arr[i];
        Math.max(wSum, maxSum);
    }
    return maxSum;
}