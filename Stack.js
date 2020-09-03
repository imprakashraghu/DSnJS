// IMPLEMENTATION BASED ON ARRAY
// METHODS SIMILAR TO PUSH & POP
// var stack = [];
// stack.push();
// stack.pop();

// IMPLEMENTATION BASED ON SINGLY LINKED LIST
// METHODS SIMILAR TO SHIFT & UNSHIFT

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value) { // add a item into the stack
        let newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } 
        else {
            let oldFirst = this.first;
            this.first = newNode;
            this.first.next = oldFirst;
        }
        this.size++;
        return this.size;
    }

    pop() { // remove a item from the stack begninning
        if (!this.first) return null; // EMPTY STACK
        let temp = this.first;
        if (this.first === this.last) { // ONE ITEM IN STACK
            this.last = null;
        }
        this.first = this.first.next;
        this.first = null;
        this.size--;
        return temp.value;
    }
} 

/*
    BIG O 💧
        TIME =>
            Insertion - O(1)
            Removal - O(1)
            Searching - O(n)
            Access - O(n)
*/