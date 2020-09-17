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

    Left View : 1 2 4 8
*/

function leftViewBinaryTree(root) {
    var data = [];
    if(!root) return root; // edge case
    var queue = [];
    queue.push(root);
    while(queue.length !== 0) {
        let size = queue.length;        
        for(var i=0; i<size; i++) {
            let current = queue.shift();            
            if(i === 0) data.push(current.value);  
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
    }
    return data;
}

/*
    1. Initialize the result array to display
    2. Initialize the queue
    3. Add the root node to the queue    
    4. Traverse the Tree by while until queue is not empty
    5. Keep track of the queue size and iterate through 0 to size
    6. Remove the node the queue and check if i is equal to 0
    7. if equal add to the result array
    8. If left node present add to the queue and same for the right node
*/

