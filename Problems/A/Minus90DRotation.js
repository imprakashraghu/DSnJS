// Rotate the given matrix by 90 degrees i.e. the first row becomes the last column and second row becomes the second last column and so on.
/*
    [[1,2,3]   90D  [[7,4,1]
     [4,5,6]   ==>  [8,5,2]  
     [7,8,9]]       [9,6,3]]

     [
        [3,6,9]
        [2,5,8]
        [1,4,7]
     ]
*/

function rotate90D(arr) {
    var n = arr.length;
    for(var i=0; i<arr.length; i++) {
        for(var j=i; j<arr[i].length; j++) {
            let temp = arr[i][j];
            arr[i][j] = arr[j][i];
            arr[j][i] = temp;
        }
    }
    for(var i=0; i<arr.length; i++) {
        for(var j=0; j<(n/2); j++) {
            let temp = arr[i][j];
            arr[i][j] = arr[i][n-1-j];
            arr[i][n-1-j] = temp;
        }
    }
    return arr;
}

/*  *REFRACTORED SOLUTION*
    INPLACE REARRANGEMENT OF ARRAY
    1. Transpose Matrix - swap(([i],[j]),([j],[i])) (Rows to Columns)
    2. Flip Horizontally - swap(([i][j]),[i][n-1-j])
*/

/*  *NAIVE SOLUTION*
    1. BUILD A NEW  ARRAY AND FILL WITH 0
    2. LOOP THROUGH THE ARRAY
    3. FIRST ROW IN LAST COLUMN
    4. SECOND ROW IN SECOND LAST COLUMN
    5. THIRD ROW IN THIRD LAST COLUMN
    6. RETURN THE NEW ARRAY

    NOT A CONSTANT SPACE !!! 
*/