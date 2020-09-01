/*
    - value
    - next node
    - previous node
*/
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

/*
    - head node
    - tail node
    - length of the list
*/

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) { // adding a node to the end of the list
        let newNode  = new Node(val);

        if(!this.head) { // empty list
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;    
        return this;
    }

    pop() { // removing a node from the end of the list
        if(!this.head) return undefined;
        let oldTail = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {            
            this.tail = this.tail.prev;
            this.tail.next = null; // chops off the connection from the list
            oldTail.prev = null;
        }        
        this.length--;
        return oldTail;
    }

    shift() { // removes a node from the beginning of the list
        if(!this.head) return undefined;
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(val) { // adding a node to the beginning of the list
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {            
            this.head.prev = newNode;            
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    _get(index) { // accessing a node in a list by position (UnOptimized version)
        if(index < 0 || index >= this.length) return null;
        let count = 0;
        let current = this.head;
        while(count !== index) {
            current = current.next;
            count++;            
        }
        return current;
    }

    get(index) { // accessing a node in a list by position (Optimized version)
        if(index < 0 || index >= this.length) return null;
        var count, current;
        if(index <= this.length/2) { // START FROM THE START
            count = 0;
            current = this.head;
            while(count !== index) {
                current = current.next;
                count++;            
            }            
        } else { // START FROM THE END
            count = this.length - 1;
            current = this.tail;
            while(count !== index) {
                current = current.prev;
                count--;
            }            
        }  
        return current;          
    }

    set(val, index) { // takes an index and updates the value of node in that index in the list
        let node = this.get(index);
        if(node !== null) {
            node.val = val;
            return true;
        }
        return false;
    }

    insert(val, index) { // adding a node to the given position in the list  
        if(index < 0 || index > this.length) return false; 
        if(index === 0) return !!this.unshift(val);
        if(index === this.length-1) return !!this.push(val);

        let prevNode = this.get(index-1); // previous node
        let newNode = new Node(val); // new node
        let nextNode = prevNode.next; // node after the previous node

        prevNode.next = newNode, newNode.prev = prevNode;
        newNode.next = nextNode, nextNode.prev = newNode;

        this.length++;
        return true;
    }

    remove(index) { // removing a node form the list in the given position
        if(index < 0 || index >= this.length) return false; 
        if(index === 0) return !!this.shift();
        if(index === this.length-1) return !!this.pop();
        
        let foundNode = this.get(index);
        let prevNode = foundNode.prev;
        let nextNode = foundNode.next;
        prevNode.next = nextNode, nextNode.prev = prevNode;
        foundNode.next = null, foundNode.prev = null; // chopping off the connection

        this.length--;
        return foundNode;
    }
    
    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        
        let next = this.head;
        let prev = null;
        
        for (var i=0; i<this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        
        return this;
    }

    // HELPER FUNCTION
    print() {
        let result = [];
        let current = this.head;
        while(current) {
            result.push(current.val);
            current = current.next;
        }
        return result;
    }

    /*
        NULL <- 1 <-> 2 <-> 3 <-> 4 -> NULL

        MORE MEMORY
        USED IN Browser History;
    */
    
    /*
        BIG O 💧
            Time => 
                Insertion - O(1)
                Removal - O(1)
                Searching - O(n)
                Access - O(n)

                Searching could be O(n/2) but its just O(n)!
    */
}

let list = new DoublyLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.unshift("Hello");
