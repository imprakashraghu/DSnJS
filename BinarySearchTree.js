class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) { // insert a node into the tree
        let newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return this;
        } 
            var current = this.root;
            while(true) {
                if(value === current.value) return undefined;
                if(value < current.value) { // deals with the left node
                    if(current.left === null) {
                        current.left = newNode;
                        return this;
                    } 
                    current = current.left;
                } else { // deals with the right node
                    if(current.right === null) {
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
    }

    find(value) { // search a node in the tree
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found) {
            if(value < current.value) {
                current = current.left;
            } else if(value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }

    contains(value) { // search and return true/false if the node is in the tree
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found) {
            if(value < current.value) {
                current = current.left;
            } else if(value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }        
        return found;
    }     
}


/*
    BIG O 💧
        Time => 
        (Best & Avergae)
            Insertion - O(log n)
            Searching - O(log n)
*/