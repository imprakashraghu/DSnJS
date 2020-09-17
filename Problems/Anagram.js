// Check the second string is an anagram of the first

/*
    **Explanation**
    Given two strings
    the frequency of characters present in string2 must
    be equal to the frequency of characters in string1

    Input:
    ------
    String 1: carrace
    String 2: racecar

    Output:
    -------
    True if or False
*/

// Optimal Solution
// FREQUENCY COUNTER ALGORITHM
function anagram(str1, str2) { // O(n)
    if(str1.length !== str2.length) return false;

    var lookup = {};
    for(var i=0; i<str1.length; i++) {
        let letter = str1[i];
        if(lookup[letter]) lookup[letter] += 1;
        else lookup[letter] = 1;
    }
    for(var i=0; i<str2.length; i++) {
        let letter = str2[i];
        if(!lookup[letter]) return false;
        else lookup[letter] -= 1;
    }
    return true;
}
