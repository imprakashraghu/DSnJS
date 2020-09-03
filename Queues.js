// IMPLEMENTATION BASED ON ARRAY
// push and shift
// unshift and pop

// IMPLEMENTAION FROM SCRACTH

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) { // add item to the end
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
        return this.size;
    }

    dequeue() { // remove item from the start
        if (!this.first) return null;
        let removedItem = this.first;
        if (this.first === this.last) {            
            this.last = null;
        } 

        this.first = this.first.next;
             
        this.size--;
        return removedItem;
    }
}

/*
    BIG O 💧
        TIME => 
            Insertion - O(1)
            Searching - O(n)
            Removal - O(1)
            Access - O(n)
*/
