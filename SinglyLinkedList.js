// piece of data - val
// reference to the next node - next
// dont use me if you wanna have a random access of the item

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) { // adds the item to the end
        let newNode = new Node(val);
        if (!this.head)  { // edge case when its empty
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }  
        this.length++;
        return this;         
    }

    pop() { // removes item from the end
        if (!this.head) return undefined; // list is zero itemed
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null; // removes the connections from the previous node
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() { // removing the node from the begining of the list
        if (!this.head) return undefined;
        let current = this.head;        
        this.head = current.next;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    unshift(val) { // adding the node from the begining of the list
        let newNode = new Node(val);
        if(!this.head) { // edge case when the list is empty
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;                           
        }        
        this.length++;
        return this;
    }

    get(index) { // retrieving a node by its position in the list
        if (index < 0 || index >= this.length) return null;
        let current = this.head;
        let counter = 0;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(val, index) { // changing the value of the node based on its position in the list
        let node = this.get(index);
        if (node) {
            node.val = val;
            return true;
        }
        return false;
    }

    insert(val, index) { // adding a new node into the position given in the list
        let newNode = new Node(val);
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val); // coercing into boolean value
        if (index === 0) return !!this.unshift(val);        

        let prevNode = this.get(index-1);                    
        let temp = prevNode.next;
        prevNode.next = newNode;
        newNode.next = temp;                    
        this.length++;
        return true;
    }

    remove(index) { // removing the item based on the given index in the list
        if (index < 0 || index >= this.length) return undefined;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();

        let prevNode = this.get(index-1); // previous node from the search item
        let removed = prevNode.next;
        prevNode.next = removed.next;
        this.length--;
        return removed;
    }

    reverse() { // reversing a linked list in place! 🔥
        let node = this.head;

        this.head = this.tail;
        this.tail = node;

        let next = node.next;
        let prev = null;
        for (var i=0; i<this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }   
        return this;     
    }

    // Helper Function
    print() {
        let arr = [];
        let current = this.head;
        while(current) {
            arr.push(current.val);
            current = current.next;
        }
        return arr;
    }

    /*
        BIG O 💧
            Time => 
                Insertion - O(1)
                Removal - It Depends O(1) or O(n)
                Search - O(n)
                Access - O(n)
    */
}

