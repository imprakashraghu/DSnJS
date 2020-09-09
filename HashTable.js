
// VERSION 01
function __hash(key, arrayLen) {
    let total = 0;
    for (let char of key) {
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % arrayLen;
    }
    return total;
}

// VERSION 02
function Hash(key, arrayLen) {
    let total = 0;
    let PRIME = 31;
    for (var i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * PRIME + value) % arrayLen;
    }
    return total;
}

// WHEN COLLISION OCCURS
/*
    GO FOR
    _____________________

    1. SEPARATE CHAINING [Store things in hashed index (nested)]
    2. LINEAR PROBING    [Store one in one index by finding empty slots]
    _____________________


*/

// SEPARATE CHAINING !!
class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let PRIME = 31;
        for (var i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let index = this._hash(key);
        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    get(key) {
        let index = this._hash(key);
        if(this.keyMap[index]) {
            for(let i=0; i<this.keyMap[index].length; i++) { // ITERATES OVER THE NESTED ARRAY
                if(this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                }
            } 
        }
        return undefined;
    }

    values() {
        let valuesArr = [];
        for(let i=0; i<this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j=0; j<this.keyMap[i].length; j++) {
                    if(!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArr;
    }

    keys() {
        let keysArr = [];
        for(let i=0; i<this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j=0; j<this.keyMap[i].length; j++) {
                    if(!keysArr.includes(this.keyMap[i][j][0])) {
                        keysArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keysArr;
    }
}

/*
    BIG O 💧
        TIME => -depeends on the quality of the hash function-
         (AVERAGE)
            Insertion - O(1)
            Removal - O(1)            
            Accessing - O(1) 
*/