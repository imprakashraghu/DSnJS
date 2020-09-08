class Node {
    constructor(value, priority) {
        this.val = value;
        this.priority = priority;
    }
}

// GONNA BE A MIN BINARY HEAP!!
class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(value, priority) { // add item to the right spot
        let newNode = new Node(value, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }    

    // HELPER FUNCTION
    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];
        while(index > 0) {
            let parentIndex = Math.floor((index - 1)/2);
            let parent = this.values[parentIndex];
            if(element.priority >= parent.priority) break;
            // SWAP!
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }

    dequeue() { // removes the root element and arranges everything back on priority        
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0) {
            this.values[0] = end;
            // sink down
            this.sinkDown();
        }
        return min;
    }

    // HLPER FUNCTION
    sinkDown() {
        let index = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if(leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIndex;
                }
            }

            if(rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIndex;
                }
            }

            if(swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }
}

// MIN & MAX BINARY HEAPS
/*
    BIG O 💧
        TIME => 
            Insertion - O(log n) 
            Removal - O(log n)
            Searching - O(n)
*/