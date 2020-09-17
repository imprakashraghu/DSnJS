/*

                1
               /  \
              2    3
             / \  / \
            4   5 6  7
                   \
                    8

    Level 1: 1
    Level 2: 2 3
    Level 3: 4 5 6 7    
    Level 4: 8

    Right View: 1 3 7 8    
*/

function rightViewBinaryTree(root) {
    var data = [];
    var queue = [];
    if(!root) return data; // edge case empty list
    queue.push(root);
    while(queue.length !== 0) {
        let size = queue.length;
        let queueLength = queue.length;
        for(var i=0; i<size; i++) {
            let current = queue.shift();
            if(i === queueLength-1) {
                data.push(current.value);
            }
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
    }
    return data;
}

// RECURSIVE SOLUTION (DFS - Pre Order)
function rightSide(root) {
    var result = [];
    function helper(node, level) {
        if(!node) return;
        result[level] = node.val;
        if(node.left) rightSide(node.left, level+1);
        if(node.right) rightSide(node.right, level+1);
    }
    helper(root, 0);
    return result;
}
// DFS O(n) Time and O(depth) Space
// LEVEL ORDER TRAVERSAL - O(n) Time and O(No. Nodes at a level) Space

/*
    1. Initialize a array to display the result
    2. Initialize a queue as array
    3. Add the root node as the first value to the queue
    4. Traverse the Tree by while until queue is not empty
    5. Keep track of the queue size and iterate through 0 to size
    6. Remove the node the queue and check if i and size are equal 
    7. if equal add to the result array
    8. If left node present add to the queue and same for the right node
*/