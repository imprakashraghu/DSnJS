function BFS(root) { // Lever order traversal
    var data = [],
    queue = [],
    node = root;
    queue.push(node);

    while (queue.length) {            
        node = queue.shift();        
        data.push(node.value);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return data;
}

// WHEN TO USE BFS
/*
    - MORE DEEP TREE
    - LESS BROADER
    - LESS SPACE MATTERS IN QUEUE
    - FEWER NODES TO KEEP TRACK OFF    
*/