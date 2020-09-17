// Dilute the binary array making all the 0s on one side and other 1s on one side
// should not sort the array
// Solution in O(n) Time and O(1) Space 
/*
    Input:
    ------
    arr = [0,0,1,1,0,1,1,0]

    Output:
    -------
    arr = [0,0,0,0,1,1,1,1]

*/
// TWO POINTERS APPROACH
function segerate(arr) { // O(n)
    var a_pointer = 0;
    var b_pointer = arr.length - 1;
    while(a_pointer <= b_pointer) {
        if(arr[a_pointer] === 0 && arr[b_pointer] === 1) {
            a_pointer++;
            b_pointer--;
        } else if(arr[b_pointer] === 0) {
            arr[b_pointer] = 1;
            b_pointer--;
        } else {
            arr[a_pointer] = 0;
            a_pointer++;
        }
    }
    return arr;
}
