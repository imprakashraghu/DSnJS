/*
    (GPI)
    Write a function displayTree(), which prints a given tree to stdout.

    - Parameter of the function is a set of relations (parent -> child).
    - Each string found anywhere in the input represents a unique node.
    - Each parent can have many children.
    - Input list may contain relations in any order.
    - Order in which pairs appear in the input list determines the node order to its sibilings.

    Input:
    ------
    
    class Relation {
        constructor(parent, child) {
            this.parent = parent;
            this.child = child;
        }
    }

    input.push(new Relation("animal", "mammal"));
    input.push(new Relation("animal", "bird"));
    input.push(new Relation("lifeform", "animal"));
    input.push(new Relation("cat", "lion"));
    input.push(new Relation("mammal", "cat"));
    input.push(new Relation("animal", "fish"));

    printTree(input);

    Output:
    -------

    lifeform
        animal
            mammal
                cat
                    lion
            bird
            fish

*/

class Relation {
    constructor(parent, child) {
        this.parent = parent;
        this.child = child;
    }
}

var input = [];

input.push(new Relation("animal", "mammal"));
input.push(new Relation("animal", "bird"));
input.push(new Relation("lifeform", "animal"));
input.push(new Relation("cat", "lion"));
input.push(new Relation("mammal", "cat"));
input.push(new Relation("animal", "fish"));

function printTree(list) {
    var hashMap = {}; // hashset to adjacenyList with parent and childs
    var result; // temp array to push childs to its respective parent
    var children = new Set(); // the adjacenyList which is answer to print

    var tree = [];

    for(var val of list) {
        children.add(val.child);
        if(hashMap[val.parent]) {
            hashMap[val.parent].push(val.child);
        } else {
            result = [];
            result.push(val.child);
            hashMap[val.parent] = result; 
        }
    }
          
    function dfs(root, level, map) {        

        tree.push(root);

        var childs = [];
        if(map[root]) {
            childs = map[root];
        } else return;

        for(var val of childs) {
            dfs(val, level+1, map);
        }
    }

    // finding the root
    let root = "";
    for(var key in hashMap) {
        if(!children.has(key)) {
            root = key;
            break;
        }
    }
    
    dfs(root, 0, hashMap);

    return tree;
}

console.log(printTree(input));

// REPRESENTAION OF THE TREE
/*
            lifeform
               |
             animal
            /  \  \
        mammal bird fish
          |
         cat
          |
         lion
*/