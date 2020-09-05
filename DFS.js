// PRE-ORDER
function DFS_PreOrder(root) {
    var data = [];
    var current = root;

    function traverse(node) {
        data.push(node.value);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
    }
    
    traverse(current);
    return data;
}

// POST-ORDER
function DFS_PostOrder(root) {
    var data = [];
    var current = root;

    function traverse(node) {        
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        data.push(node.value);
    }
    
    traverse(current);
    return data;
}

// IN-ORDER
function DFS_InOrder(root) {
    var data = [];
    var current = root;

    function traverse(node) {        
        if (node.left) traverse(node.left);
        data.push(node.value);
        if (node.right) traverse(node.right);        
    }
    
    traverse(current);
    return data;
}

// WHEN TO USE DFS
/*    
    - BROADER TREE
    - LESS DEEP
    - THINK ABOUT SPACE COMPLEXITY

    - DFS-IN-ORDER => To make items in underlying order in BST
    - DFS-PRE-ORDER => To serialize or store in DB or easily reconstructed or copied.    
*/