/*

    Given a string consisting of lowercase English letters and spaces (may or may not be multiple spaces). Your task is to print first letter of every word in the string.

    Input:
    The first line of input contains an integer T denoting the nuimber of test cases.Each test case consist of a string.

    Output:
    Print the first letter of every word in the given string.

    Constraints:
    1<=T<=100

    Example:
    Input:
    2
    geeks for geeks
    bad is good
    Output:
    gfg
    big    

*/

function getMeFirsts(str) {
    var result = "";
    for(var i=0; i<str.length; i++) {
        if(str[i] !== ' ') {
            if(i === 0) result += str[i];
            else if(str[i-1] === ' ') result += str[i];
        }
    }
    return result;
}

function _getMeFirsts(str) {
    var result = "";
    var arr = str.split(" ");
    for(var val of arr) {
        if(val.length > 0) {
            result += val[0];
        }
    }
    return result;
}