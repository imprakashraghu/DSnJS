/*

    1. Overlapping SubProblem

    LOOK FOR REPEATATION
    BREAKING DOWN TO SEVERAL PROBLEMS

        1. Fibionacci Sequence
        2. Merge Method    


    2. Optiomal SubStructure

    OPTIMAL SOLUTION FROM OPTIMALSOLUTION FROM ANOTHER PROBLEM

        1. Fibonacci Series
        2. Shortest Path between the vertices
        3. Finding Cheap flight fares in any websites.    
*/

// BIG O(2^n) => DAMN SLOW !!!
// Nth in Fibnonacci Sequence
function nFibonacci(n) { // RECURSIVE SOLUTION
    if(n <= 2) return 1;
    return nFibonacci(n-1) + nFibonacci(n-2);
}

/*
    | BREAKING DOWN THE RECURSIVE TREE |

                fib(5)
                /   \
            fib(4)  fib(3)
            /    \   /    \
      fib(3) fib(2) fib(2) fib(1)
      /   \
  fib(2) fib(1)

*/

// UPGRADE OUR SOLUTION !!!
// USING PAST KNOWLEDGE TO MAKE SOLVING A FUTURE PROBLEM EASIER
// => MEMOIZATION - TOP-DOWN APPROACH
// USING ARRAY AS STORAGE
function nFibonacciUpgraded(n, memo=[]) { // MEMO-IZED SOLUTION
    if(memo[n] !== undefined) return memo[n]; // (Short Circuits the entire process)
    if(n <= 2) return 1;
    var res = nFibonacciUpgraded(n-1, memo) + nFibonacciUpgraded(n-2, memo);
    memo[n] = res;
    return res;
}

// BIG O(N) MUCH BETTER !!!
// We have a problem with the call stack maximum size

/*
    TABULATION - BOTTOM-UP APPROACH
    - Better Space Complexity can be achieved
*/
// TABULATION VERSION
function fib(n) {
    if(n <=2) return 1;
    var fibNums [0,1,1];
    for(var i=3; i<=n; i++) {
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums[n];
}